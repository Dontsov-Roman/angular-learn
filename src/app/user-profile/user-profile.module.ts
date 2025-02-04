import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

import { UserProfileService } from './user-profile.service';
import { UserProfileComponent } from './user-profile/user-profile.component';


@NgModule({
  declarations: [
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
  ],
  providers: [
    UserProfileService,
  ],
  exports: [
    UserProfileComponent,
  ]
})
export class UserProfileModule { }
