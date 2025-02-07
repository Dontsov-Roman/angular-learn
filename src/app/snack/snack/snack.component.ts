import { Component, OnDestroy } from '@angular/core';

import { SnackMessage } from '../snack.types';
import { SnackService } from '../snack.service';
import { interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrl: './snack.component.scss'
})
export class SnackComponent implements OnDestroy {
  private interval = interval(300).subscribe(() => this.snackService.clearOldMessages());

  constructor(private snackService: SnackService) { }
  
  get messages(): Observable<SnackMessage[]> {
    return this.snackService.messages$;
    // return of([]);
  }
  hide(message: SnackMessage) {
    this.snackService.hide(message);
  }
  ngOnDestroy(): void {
    this.interval.unsubscribe();
  }
}
