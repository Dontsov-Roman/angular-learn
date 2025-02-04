import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { BASE_SERVICE_URL_TOKEN } from '../services/rest/baseService.service';
import { ID } from '../services/rest/base-service.types';
import { AbstractProfileService } from './user-profile.types';

export const GET_PROFILE_URL = new InjectionToken("Get profile url");

@Injectable()
export class UserProfileService<T extends ID> extends AbstractProfileService<T> {
  profile?: T;
  constructor(
    private httpClient: HttpClient,
    @Inject(BASE_SERVICE_URL_TOKEN) protected baseUrl: string,
    @Inject(GET_PROFILE_URL) protected url: string
  ) {
    super();
  }
  getProfileRequest(): Observable<T> {
    return this.httpClient.get<T>(this.fullUrl);
  }
  loadProfile(): Promise<T> {
    return new Promise((resolve, reject) => {
      this.getProfileRequest().subscribe((profile) => {
        if (profile) {
          this.profile = profile;
          resolve(profile);
        } else {
          reject('Unable to load profile');
        }
      })
    });
  }
}
