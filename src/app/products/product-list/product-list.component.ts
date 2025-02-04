import { Component } from '@angular/core';

import { AbstractBaseService, ListType } from '../../services/rest/base-service.types';
import { Product } from '../products.types';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  list: ListType<Product> = { data: [], pagination: { total: 0 } };

  constructor(private service: AbstractBaseService<Product>) {
    this.service.getList().subscribe(list => this.list = list);
  }
}
