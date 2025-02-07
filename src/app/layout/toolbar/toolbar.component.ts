import { Component, Inject, InjectionToken } from '@angular/core';
import { MatDialog as Dialog } from '@angular/material/dialog';

import { SideNavService } from '../side-nav/side-nav.service';
import { AuthService } from '../../services/auth/auth.service';
import { SigninFormComponent } from '../../signin-form/signin-form.component';

export const SIGN_IN_DIALOG_ANIMATION = new InjectionToken<number>('SIGNIN DIALOG ANIMATION DURATION');
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  constructor(
    private sideNavService: SideNavService,
    private authService: AuthService,
    private dialog: Dialog,
    @Inject(SIGN_IN_DIALOG_ANIMATION) private animationDuration = 300,
  ) {
  }
  
  toggle() { 
    this.sideNavService.toggle();
  }
  openSigninModal() {
    this.dialog.open(SigninFormComponent, { enterAnimationDuration: this.animationDuration, exitAnimationDuration: this.animationDuration });
  }
  click() {
    if (this.authService.isAuthenticated()) {
      this.toggle()
    } else {
      this.openSigninModal();
    }
  }
  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated()
  }
}
