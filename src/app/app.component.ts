import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-learn';
}
