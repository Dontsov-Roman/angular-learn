import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://fakestoreapi.com/auth/login';
  private token?: string;
  private isAuth: boolean = false;
  constructor(private http: HttpClient) { }

  async login(username: string, password: string) {
    return new Promise((resolve) => { 
      this.http.post<{ token: string }>(this.loginUrl, { username, password }).subscribe(({ token }) => {
        this.token = token;
        this.isAuth = true;
        resolve(true);
      });
    });
  }
  logout() {
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
