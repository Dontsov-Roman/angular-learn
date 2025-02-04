import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { SideNavService } from '../side-nav/side-nav.service';

@Component({
  selector: 'app-drawer-menu',
  templateUrl: './drawer-menu.component.html',
  styleUrl: './drawer-menu.component.scss'
})
export class DrawerMenuComponent {
  constructor(private authService: AuthService, private sideNavService: SideNavService) {
    
  }
  async logout() { 
    await this.authService.logout();
    this.sideNavService.close();
  }
}
