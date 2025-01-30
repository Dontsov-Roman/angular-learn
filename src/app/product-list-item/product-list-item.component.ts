import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { Product } from '../services/products.service';

@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, MatCardModule,],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.scss'
})
export class ProductListItemComponent {
  @Input() item!: Product;
}
