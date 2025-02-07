import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SNACK_COMPONENT_SERVICE_TOKEN, SnackComponent } from './snack/snack.component';
import { SnackService } from './snack.service';


@NgModule({
  declarations: [SnackComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    SnackService,
    {
      provide: SNACK_COMPONENT_SERVICE_TOKEN,
      useExisting: SnackService,
    }
  ],
  exports: [SnackComponent],
})
export class SnackModule { }
