import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable, signal } from '@angular/core';

import { AuthStorageService } from './auth-storage.service';
import { AbstractAuth, LOGIN_URL_TOKEN } from './auth.types';
import { BASE_SERVICE_URL_TOKEN } from '../rest/baseService.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AbstractAuth {
  private token?: string;
  private isAuth = signal<boolean>(false);
  private http = inject(HttpClient);
  private authStorage = inject(AuthStorageService);
  protected baseUrl = inject<string>(BASE_SERVICE_URL_TOKEN);
  protected url = inject<string>(LOGIN_URL_TOKEN);
  constructor() {
    super();
    this.authStorage.getToken().then((token) => {
      if (token) {
        this.successLogin(token);
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
            this.successLogin(response.token);
            resolve(true);
          }
        });
    });
  }

  async successLogin(token: string) {
    this.authStorage.setToken(token);
    this.token = token;
    // await this.profileService.loadProfile();
    this.isAuth.set(true);
  }
  async logout() {
    this.authStorage.removeToken();
    this.token = undefined;
    this.isAuth.set(false);
  }
  getAuthToken(): string | undefined {
    return this.token;
  }
  isAuthenticated() {
    return this.isAuth();
  }
}
