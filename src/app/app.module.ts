import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { routes } from './app.routes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductListComponent,
    RouterModule.forRoot(routes)
  ]
})
export class AppModule { }
