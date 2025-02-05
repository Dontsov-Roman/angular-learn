import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { httpInterceptorProviders } from './interceptors';
import { DrawerMenuComponent } from './layout/drawer-menu/drawer-menu.component';
import { urlProviders } from './app.urls.providers';
import { UserProfileService } from './user-profile/user-profile.service';
import { AbstractProfileService } from './user-profile/user-profile.types';
import { SIGN_IN_DIALOG_ANIMATION } from './layout/toolbar/toolbar.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideAnimationsAsync(),
    httpInterceptorProviders,
    DrawerMenuComponent,
    urlProviders,
    {
      provide: AbstractProfileService,
      useClass: UserProfileService,
    },
    {
      provide: SIGN_IN_DIALOG_ANIMATION,
      useValue: 400,
    }
  ]
};
