import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { AuthStorageService } from './auth-storage.service';
import { AbstractAuth, LOGIN_URL_TOKEN } from './auth.types';
import { BASE_SERVICE_URL_TOKEN } from '../rest/baseService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AbstractAuth {
  private token?: string;
  private isAuth: boolean = false;
  constructor(
    private http: HttpClient,
    private authStorage: AuthStorageService,
    @Inject(BASE_SERVICE_URL_TOKEN) protected baseUrl: string,
    @Inject(LOGIN_URL_TOKEN) protected url: string = 'auth/login',
  ) {
    super();
    this.authStorage.getToken().then((token) => {
      if (token) {
        this.setToken(token);
      }
    });
  }
  loginRequest(username: string, password: string) {
    return this.http
      .post<{ token: string }>(this.fullUrl, { username, password });
  } 
  async login(username: string, password: string): Promise<boolean> {
    return new Promise((resolve) => { 
        this.loginRequest(username, password)
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
