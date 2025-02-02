import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SnackService } from './snack.service';
import { SnackComponent } from './snack/snack.component';


@NgModule({
  declarations: [SnackComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [SnackService],
  exports: [SnackComponent],
})
export class SnackModule { }
