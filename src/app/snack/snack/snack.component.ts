import { Component } from '@angular/core';

import { SnackMessage } from '../snack.types';
import { SnackService } from '../snack.service';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrl: './snack.component.scss'
})
export class SnackComponent {
  constructor(private snackService: SnackService) {}
  get messages() {
    return this.snackService.messages;
  }
  hide(message: SnackMessage) {
    this.snackService.hide(message);
  }
}
