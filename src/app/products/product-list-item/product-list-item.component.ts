import { Component, Input } from '@angular/core';
import { Product } from '../products.types';


@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.scss'
})
export class ProductListItemComponent {
  @Input() item!: Product;
}
