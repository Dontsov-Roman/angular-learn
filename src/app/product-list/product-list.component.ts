import { Component } from '@angular/core';
import { Product, ProductsService } from '../services/products.service';
import { ListType } from '../services/base-service';
import { ProductListItemComponent } from '../product-list-item/product-list-item.component';
import { CommonModule } from '@angular/common';

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
    this.service.getList().then(list => { this.list = list; console.log(this.list)});
  }
}
