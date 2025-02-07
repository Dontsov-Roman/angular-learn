import { inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BASE_SERVICE_URL_TOKEN } from '../services/rest/baseService.service';
import { ID } from '../services/rest/base-service.types';
import { AbstractProfileService } from './user-profile.types';

export const GET_PROFILE_URL = new InjectionToken<string>("Get profile url");

@Injectable()
export class UserProfileService<T extends ID> extends AbstractProfileService<T> {
  private httpClient = inject(HttpClient);
  protected override baseUrl = inject(BASE_SERVICE_URL_TOKEN);
  protected override url = inject(GET_PROFILE_URL);
  getProfile() {
    return this.httpClient.get<T>(this.fullUrl);
  }
}
