import { Component, inject } from '@angular/core';
import { CART_INJECTION_TOKEN, CartService } from '../cart.service';
import { ICartService } from '../cart.types';
import { ID } from '../../services/rest/base-service.types';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrl: './header-cart.component.scss'
})
export class HeaderCartComponent {
  private cartService = inject<ICartService>(CART_INJECTION_TOKEN);
  count = this.cartService.count;
}
