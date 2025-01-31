import { Component } from '@angular/core';
import { SideNavService } from '../side-nav/side-nav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  constructor(private sideNavService: SideNavService) {
  }
  
  toggle() { 
    this.sideNavService.toggle();
  }
}
