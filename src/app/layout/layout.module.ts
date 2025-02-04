import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavService } from './side-nav/side-nav.service';
import { SigninFormComponent } from '../signin-form/signin-form.component';
import { DrawerMenuComponent } from './drawer-menu/drawer-menu.component';
import { SnackService } from '../snack/snack.service';
import { UserProfileModule } from '../user-profile/user-profile.module';

@NgModule({
  declarations: [ToolbarComponent, SideNavComponent, DrawerMenuComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    DialogModule,
    FormsModule,
    UserProfileModule,
    MatListModule,
  ],
  exports: [ToolbarComponent, SideNavComponent, DrawerMenuComponent],
  providers: [
    SideNavService,
    Dialog,
    SigninFormComponent,
    DrawerMenuComponent,
    SnackService,
  ]
})
export class LayoutModule { }
