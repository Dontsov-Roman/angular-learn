import { Component, computed, inject, Input } from '@angular/core';
import { Product } from '../products.types';
import { CART_INJECTION_TOKEN } from '../../cart/cart.service';
import { ICartService } from '../../cart/cart.types';


@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrl: './product-list-item.component.scss'
})
export class ProductListItemComponent {
  @Input() item!: Product;
  private cartService = inject<ICartService<Product>>(CART_INJECTION_TOKEN);
  alreadyAdded = computed<boolean>(() => this.cartService.alreadyAdded(this.item));
  countInCart = computed(() => this.cartService.countByItem(this.item));

  addToCart($event: Event) {
    $event.stopPropagation();
    this.cartService.addItem(this.item);
  }
  removeFromCart($event: Event) {
    $event.stopPropagation();
    this.cartService.removeItem(this.item);
  }
}
