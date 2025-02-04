import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../services/rest/products.service';
import { AbstractBaseService } from '../../services/rest/base-service.types';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  @Input() item!: Product;
  route: ActivatedRoute = inject(ActivatedRoute);
  constructor(private service: AbstractBaseService<Product>) {
    this.service.getById(Number(this.route.snapshot.params['id'])).subscribe(item => this.item = item);
  }
}
