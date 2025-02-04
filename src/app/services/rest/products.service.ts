import { Injectable } from '@angular/core';
import { BaseService } from './baseService.service';
import { ID } from './base-service.types';

export type Product = ID & {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}
@Injectable()
export class ProductsService extends BaseService<Product>{
  protected override baseUrl: string = 'https://fakestoreapi.com/products';
}
