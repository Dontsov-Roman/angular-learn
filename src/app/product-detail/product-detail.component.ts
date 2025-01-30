import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Product, ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, MatButtonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  @Input() item!: Product;
  route: ActivatedRoute = inject(ActivatedRoute);
  constructor(private service: ProductsService) {
    this.service.getById(Number(this.route.snapshot.params['id'])).then(item => this.item = item);
  }
}
