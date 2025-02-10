import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AbstractBaseService } from '../services/rest/base-service.types';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { BaseService, SERVICE_URL_TOKEN } from '../services/rest/baseService.service';
import { CART_INJECTION_TOKEN, CartService } from '../cart/cart.service';

@NgModule({
  declarations: [
    ProductListItemComponent,
    ProductListComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
  ],
  exports: [
    ProductListComponent,
    ProductListItemComponent,
    ProductDetailComponent,
  ],
  providers: [
    {
      provide: AbstractBaseService,
      useClass: BaseService,
    },
    {
      provide: SERVICE_URL_TOKEN,
      useValue: 'products',
    },
    {
      provide: CART_INJECTION_TOKEN,
      useExisting: CartService,
    }
  ]
})
export class ProductsModule { }
