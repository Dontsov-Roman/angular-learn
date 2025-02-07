import { Component, inject } from '@angular/core';

import { AbstractBaseService, ListType } from '../../services/rest/base-service.types';
import { Product } from '../products.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  constructor(private service: AbstractBaseService<Product>) {}

  get list$() { 
    return this.service.getList();
  }
}
