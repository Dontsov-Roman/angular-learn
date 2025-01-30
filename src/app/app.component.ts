import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { LayoutModule } from './layout/layout.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListItemComponent, LayoutModule, MatSidenavModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-learn';
}
