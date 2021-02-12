import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Credentials } from '../models/credentials.model';

@Injectable({
  providedIn:'root'
})
export class AuthStore {

  private signInUrl = 'http://localhost:8080/auth';

  constructor(
    private _http: HttpClient
  ){}


  public attemptAuthentication(userCredential: Credentials) {
    return this._http.post(this.signInUrl, userCredential);
  }

}
