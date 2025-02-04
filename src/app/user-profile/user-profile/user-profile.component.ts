import { Component } from '@angular/core';

import { AbstractProfileService, User } from '../user-profile.types';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  constructor(private profileService: AbstractProfileService<User>) { }
  get profile() {
    return this.profileService.profile;
  }
  get fullName() {
    return `${this.profile?.name.firstname} ${this.profile?.name.lastname}`
  }
}
