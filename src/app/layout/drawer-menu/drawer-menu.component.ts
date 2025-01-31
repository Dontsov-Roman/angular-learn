import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-drawer-menu',
  templateUrl: './drawer-menu.component.html',
  styleUrl: './drawer-menu.component.scss'
})
export class DrawerMenuComponent {
  constructor(private authService: AuthService) {
    
  }
  logout() { 
    this.authService.logout();
  }
}
