import { Injectable } from '@angular/core';
import { MatDrawerToggleResult, MatSidenav } from '@angular/material/sidenav';

import { IOpenCloseService } from '../open-close.interface';

@Injectable()
export class SideNavService implements IOpenCloseService<MatDrawerToggleResult> {
  private sidenav!: MatSidenav;

  setEntity(sidenav: MatSidenav) {
    this.sidenav = sidenav;
  }

  open() {
    return this.sidenav?.open();
  }
  
  close() {
    return this.sidenav?.close();
  }
  
  toggle() {
    return this.sidenav?.toggle();
  }

  get opened(): boolean {
    return this.sidenav?.opened || false;
  }
}
