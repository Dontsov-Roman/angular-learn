import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AbstractBaseService } from '../services/rest/base-service.types';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { BASE_SERVICE_URL_TOKEN, BaseService, SERVICE_URL_TOKEN } from '../services/rest/baseService.service';

@NgModule({
  declarations: [ProductListItemComponent, ProductListComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    MatCardModule,
    MatButtonModule
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
      provide: BASE_SERVICE_URL_TOKEN,
      useValue: 'https://fakestoreapi.com',
    },
    {
      provide: SERVICE_URL_TOKEN,
      useValue: 'products',
    }
  ]
})
export class ProductsModule { }
