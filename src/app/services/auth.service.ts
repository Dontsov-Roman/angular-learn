import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthStorageService } from './auth-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://fakestoreapi.com/auth/login';
  private token?: string;
  private isAuth: boolean = false;
  constructor(private http: HttpClient, private authStorage: AuthStorageService) {
    const token = this.authStorage.getToken();
    if (token) {
      this.setToken(token);
    }
  }

  async login(username: string, password: string) {
    return new Promise((resolve) => { 
      this.http.post<{ token: string }>(this.loginUrl, { username, password }).subscribe(({ token }) => {
        this.setToken(token);
        resolve(true);
      });
    });
  }

  setToken(token: string) {
    this.authStorage.setToken(token);
    this.token = token;
    this.isAuth = true;
  }
  async logout() {
    this.authStorage.removeToken();
    this.token = undefined;
    this.isAuth = false;
  }
  getAuthToken(): string | undefined {
    return this.token;
  }
  isAuthenticated() {
    return this.isAuth;
  }
}
