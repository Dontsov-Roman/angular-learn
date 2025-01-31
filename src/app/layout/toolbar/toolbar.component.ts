import { Component, inject } from '@angular/core';
import { Dialog, DialogRef } from '@angular/cdk/dialog';

import { SideNavService } from '../side-nav/side-nav.service';
import { AuthService } from '../../services/auth.service';
import { SigninFormComponent } from '../../signin-form/signin-form.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  dialog = inject(Dialog);
  constructor(
    private sideNavService: SideNavService,
    private authService: AuthService,
  ) {
  }
  
  toggle() { 
    this.sideNavService.toggle();
  }
  openSigninModal() {
    this.dialog.open(SigninFormComponent);
  }
  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated()
  }
}
