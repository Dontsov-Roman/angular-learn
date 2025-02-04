import { Component } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';

import { SideNavService } from '../side-nav/side-nav.service';
import { AuthService } from '../../services/auth/auth.service';
import { SigninFormComponent } from '../../signin-form/signin-form.component';

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
