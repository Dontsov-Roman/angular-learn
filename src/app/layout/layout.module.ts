import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { FormsModule } from '@angular/forms';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavService } from './side-nav/side-nav.service';
import { SigninFormComponent } from '../signin-form/signin-form.component';

@NgModule({
  declarations: [ToolbarComponent, SideNavComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    DialogModule,
    FormsModule,
  ],
  exports: [ToolbarComponent, SideNavComponent],
  providers: [
    SideNavService,
    Dialog,
    SigninFormComponent,
  ]
})
export class LayoutModule { }
