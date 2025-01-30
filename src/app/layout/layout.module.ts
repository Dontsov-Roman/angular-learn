import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavService } from './side-nav.service';

@NgModule({
  declarations: [ToolbarComponent, SideNavComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    RouterOutlet,
  ],
  exports: [ToolbarComponent, SideNavComponent],
  providers: [SideNavService]
})
export class LayoutModule { }
