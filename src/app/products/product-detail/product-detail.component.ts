import { Component, computed, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { AbstractBaseService } from '../../services/rest/base-service.types';
import { Product } from '../products.types';
import { ICartService } from '../../cart/cart.types';
import { CART_INJECTION_TOKEN } from '../../cart/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  private cartService = inject<ICartService<Product>>(CART_INJECTION_TOKEN);
  private service = inject(AbstractBaseService<Product>);
  item$: Observable<Product> = this.service.getById(Number(this.route.snapshot.params['id']));
  item = toSignal<Product>(this.item$);
  alreadyAdded = computed(() => this.cartService.alreadyAdded(this.item()));
  countInCart = computed(() => this.cartService.countByItem(this.item()));

  addToCart() {
    this.cartService.addItem(this.item());
  }
  removeFromCart() {
    this.cartService.removeItem(this.item());
  }
}
