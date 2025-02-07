import { Component, inject } from '@angular/core';

import { AbstractProfileService, User } from '../user-profile.types';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  private profileService = inject(AbstractProfileService);
  profile$ = this.profileService.getProfile();
}
