import { USER_KEY } from './../properties';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { JWT_KEY } from '../properties';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }


  public getToken() {
    return localStorage.getItem(JWT_KEY);
  }

  public setToken(token: string) {
    localStorage.setItem(JWT_KEY, token);
  }

  public setUser(user: User) {
    const userStr = JSON.stringify(user);
    localStorage.setItem(USER_KEY, userStr);
  }

  public getUser() {
    const userStr = localStorage.getItem(USER_KEY);
    return JSON.parse(userStr) as User;
  }

  public clearStorage() {
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(JWT_KEY);
  }

}
