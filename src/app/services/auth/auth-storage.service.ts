import { Injectable } from '@angular/core';
import { AbstractStorage } from './abstract-storage';

@Injectable({
  providedIn: 'root'
})
export class AuthStorageService extends AbstractStorage {
  private key = 'auth-token';

  async getToken(): Promise<string | null> {
    return localStorage.getItem(this.key);
  }
  setToken(token: string) {
    localStorage.setItem(this.key, token);
  }
  removeToken() {
    localStorage.removeItem(this.key);
  }
}
