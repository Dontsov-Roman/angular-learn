import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthStorageService } from './auth-storage.service';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'https://fakestoreapi.com/auth/login';
  private token?: string;
  private isAuth: boolean = false;
  private mockedCreds = {
    username: 'mor_2314',
    password: '83r5^_'
  };
  constructor(private http: HttpClient, private authStorage: AuthStorageService) {
    const token = this.authStorage.getToken();
    if (token) {
      this.setToken(token);
    }
  }

  async login(username: string, password: string) {
    return new Promise((resolve, reject) => { 
      this.http
        .post<{ token: string }>(this.loginUrl, { username, password })
        // Mocked user name and password, should be removed
        .pipe(catchError(async () => reject(`try another creds. Username: ${this.mockedCreds.username} and password: ${this.mockedCreds.password}`)))
        .subscribe((response) => {
          if (response?.token) {
            this.setToken(response.token);
            resolve(true);
          }
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
