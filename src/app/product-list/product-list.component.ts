import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product, ProductsService } from '../services/products.service';
import { ListType } from '../services/base-service';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductListItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  list: ListType<Product> = { data: [], pagination: { total: 0 } };

  constructor(private service: ProductsService) {
    this.service.getList().subscribe(list => this.list = list);
  }
}
