import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ProductsModule } from './products/products.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppModule { }
