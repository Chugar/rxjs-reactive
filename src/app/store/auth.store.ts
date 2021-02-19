import { AuthService } from './../services/auth.service';
import { JWT_KEY, USER_KEY } from './../properties';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { BehaviorSubject, throwError, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Credentials } from '../models/credentials.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn:'root'
})
export class AuthStore {

  private signInUrl = 'http://localhost:8080/auth';
  private subject = new BehaviorSubject<User>(null);
  public user$ = this.subject.asObservable();
  public isLoggedIn$: Observable<boolean>;
  public isLoggedOut$: Observable<boolean>;


  constructor(
    private _http: HttpClient,
    private _authService: AuthService
  ) {
    this.isLoggedIn$ = this.user$.pipe(map(user => !!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn));
    this.checkLoggedIn();
  }


  public attemptAuthentication(userCredential: Credentials) {
    return this._http.post(this.signInUrl, userCredential, {observe: 'response'}).pipe(
      catchError((error) => {
        return throwError(error);
      }),
      tap( response => {
        const user = response.body as User;
        this.subject.next(user);
        this._authService.setUser(user);
        this._authService.setToken(user.jwtToken);
      })
    );
  }

  public logout() {
    this.subject.next(null);
    this._authService.clearStorage();
  }


  public checkLoggedIn() {
    const user = this._authService.getUser();
    if(user) {
      this.subject.next(user);
    }
  }
}
