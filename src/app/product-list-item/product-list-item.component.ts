import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../services/products.service';

@Component({
  selector: 'app-product-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.scss'
})
export class ProductListItemComponent {
  @Input() item!: Product;
}
