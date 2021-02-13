import { AuthService } from './auth.service';
import { JWT_PREFIX } from './../properties';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptService implements HttpInterceptor{

  constructor(
    private _auth: AuthService
  ) { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // TODO: faire un effort de clarification
    const token = this._auth.getToken().startsWith('Bearer') ? this._auth.getToken() : '';

    const tokenizedReq = req.clone( {
      setHeaders: {Authorization: token}
    });

    return next.handle(tokenizedReq);
  }
}
