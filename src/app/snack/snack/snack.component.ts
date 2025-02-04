import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AbstractSnackService, SnackMessage } from '../snack.types';
import { SnackService } from '../snack.service';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrl: './snack.component.scss'
})
export class SnackComponent implements OnDestroy {
  message?: SnackMessage | null;
  protected defaultHideTime = 3000;

  private subscription: Subscription;
  
  constructor(private snackService: SnackService) {
    this.subscription = this.snackService.message
      .subscribe((snackMessage) => {
        this.message = snackMessage;
      });
  }
  hide() {
    this.snackService.hide();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
