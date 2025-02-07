import { Component, Inject, inject, InjectionToken, OnDestroy } from '@angular/core';

import { ISnackService, SnackMessage } from '../snack.types';
import { SnackService } from '../snack.service';

export const SNACK_COMPONENT_SERVICE_TOKEN = new InjectionToken<ISnackService>('Snack Service class');

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrl: './snack.component.scss'
})
export class SnackComponent implements OnDestroy {
  private snackService = inject<SnackService>(SNACK_COMPONENT_SERVICE_TOKEN);
  messages = this.snackService.messages
  // private interval = interval(300).subscribe(() => this.snackService.clearOldMessages());

  hide(message: SnackMessage) {
    this.snackService.hide(message);
  }
  ngOnDestroy(): void {
    // this.interval.unsubscribe();
  }
}
