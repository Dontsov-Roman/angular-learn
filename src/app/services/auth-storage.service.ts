import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService {
  private key = 'auth-token';

  constructor() { }
  getToken() {
    return localStorage.getItem(this.key);
  }
  setToken(token: string) {
    localStorage.setItem(this.key, token);
  }
  removeToken() {
    localStorage.removeItem(this.key);
  }
}
