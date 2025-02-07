import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractBaseService } from '../../services/rest/base-service.types';
import { Product } from '../products.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  item$: Observable<Product> = this.service.getById(Number(this.route.snapshot.params['id']));
  constructor(private service: AbstractBaseService<Product>) {
  }
}
