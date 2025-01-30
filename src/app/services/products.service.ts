import { Injectable } from '@angular/core';
import { BaseService } from './baseService.service';
import { ID } from './base-service';

export type Product = ID & {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService<Product>{
  protected override baseUrl: string = 'https://fakestoreapi.com/products';
}
