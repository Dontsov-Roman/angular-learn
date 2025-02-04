import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AbstractBaseService } from '../services/rest/base-service.types';
import { ProductsService } from '../services/rest/products.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { MatButtonModule } from '@angular/material/button';

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
      useClass: ProductsService,
    }
  ]
})
export class ProductsModule { }
