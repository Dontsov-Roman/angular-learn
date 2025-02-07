import { Component, computed, inject } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';
import { SideNavService } from '../side-nav/side-nav.service';
import { ISnackService } from '../../snack/snack.types';
import { SNACK_COMPONENT_SERVICE_TOKEN } from '../../snack/snack/snack.component';

@Component({
  selector: 'app-drawer-menu',
  templateUrl: './drawer-menu.component.html',
  styleUrl: './drawer-menu.component.scss'
})
export class DrawerMenuComponent {
  private snackService = inject<ISnackService>(SNACK_COMPONENT_SERVICE_TOKEN);
  private authService = inject(AuthService);
  private sideNavService = inject(SideNavService);
  showUserProfile = computed(() => this.authService.isAuthenticated());
  async logout() { 
    await this.authService.logout();
    this.sideNavService.close();
    this.snackService.showMessage({ message: 'Come back soon!' });
  }
}
