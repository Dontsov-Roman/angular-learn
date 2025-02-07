import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { SideNavService } from './side-nav.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent implements AfterViewInit {
  @ViewChild('sidenav') public sidenav!: MatSidenav;
  constructor(private sideNavService: SideNavService) { }
  
  ngAfterViewInit(): void {
    this.sideNavService.setEntity(this.sidenav);
  }
  get opened(): boolean {
    return this.sideNavService?.opened;
  }
}
