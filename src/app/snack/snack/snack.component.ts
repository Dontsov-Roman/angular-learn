import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SnackMessage } from '../snack.types';
import { SnackService } from '../snack.service';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrl: './snack.component.scss'
})
export class SnackComponent implements OnDestroy {
  message?: SnackMessage | null;
  private subscription: Subscription;
  
  constructor(private snackService: SnackService) {
    this.subscription = this.snackService.message
      .subscribe((snackMessage) => {
        this.message = snackMessage;
      });
  }
  hide(message: SnackMessage) {
    this.snackService.hide(message);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
