import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

import { LayoutModule } from './layout/layout.module';
import { SnackModule } from './snack/snack.module';
import { ProductsModule } from './products/products.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsModule, LayoutModule, MatSidenavModule, RouterOutlet, SnackModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-learn';
}
