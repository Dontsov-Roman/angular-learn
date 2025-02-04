import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AbstractSnackService, SnackMessage } from './snack.types';

export { SnackMessage };
@Injectable()
export class SnackService extends AbstractSnackService {
  private defaultTimeout = 3000;
  private timeout?: any;
  private subjectMessage = new BehaviorSubject<SnackMessage | null>(null);
  override message = this.subjectMessage.asObservable();

  protected clearTimeout() {
    clearTimeout(this.timeout);
  }
  
  showMessage(message: SnackMessage, timeout?: number): void {
    this.subjectMessage.next(message);
    this.clearTimeout();
    // this.subjectMessage.forEach(console.log);
    this.timeout = setTimeout(() => {
      this.hide(message);
    }, timeout || this.defaultTimeout);
  }

  hide(message: SnackMessage): void {
    this.subjectMessage.next(null);
  }
}
