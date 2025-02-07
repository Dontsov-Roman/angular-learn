import { Component, OnDestroy } from '@angular/core';

import { SnackMessage } from '../snack.types';
import { SnackService } from '../snack.service';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrl: './snack.component.scss'
})
export class SnackComponent implements OnDestroy {
  messages = this.snackService.messages
  // private interval = interval(300).subscribe(() => this.snackService.clearOldMessages());

  constructor(private snackService: SnackService) { }
  
  hide(message: SnackMessage) {
    this.snackService.hide(message);
  }
  ngOnDestroy(): void {
    // this.interval.unsubscribe();
  }
}
