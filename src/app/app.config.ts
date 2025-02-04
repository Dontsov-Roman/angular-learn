import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { httpInterceptorProviders } from './interceptors';
import { DrawerMenuComponent } from './layout/drawer-menu/drawer-menu.component';
import { BASE_SERVICE_URL_TOKEN } from './services/rest/baseService.service';
import { LOGIN_URL_TOKEN } from './services/auth/auth.types';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideAnimationsAsync(),
    httpInterceptorProviders,
    DrawerMenuComponent,
    {
      provide: BASE_SERVICE_URL_TOKEN,
      useValue: 'https://fakestoreapi.com',
    },
    {
      provide: LOGIN_URL_TOKEN,
      useValue: 'auth/login',
    }
  ]
};
