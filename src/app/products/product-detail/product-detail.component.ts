import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductsService } from '../../services/rest/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  @Input() item!: Product;
  route: ActivatedRoute = inject(ActivatedRoute);
  constructor(private service: ProductsService) {
    this.service.getById(Number(this.route.snapshot.params['id'])).subscribe(item => this.item = item);
  }
}
