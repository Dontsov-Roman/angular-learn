import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { CART_INJECTION_TOKEN, CartService } from './cart.service';
import { HeaderCartComponent } from './header-cart/header-cart.component';

@NgModule({
  declarations: [
    HeaderCartComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
  ],
  providers: [
    CartService,
    HeaderCartComponent,
    {
      provide: CART_INJECTION_TOKEN,
      useExisting: CartService,
    }
  ],
  exports: [
    HeaderCartComponent,
  ]
})
export class CartModule { }
