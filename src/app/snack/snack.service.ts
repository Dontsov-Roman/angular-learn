import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AbstractSnackService, SnackMessage } from './snack.types';

export { SnackMessage };
@Injectable()
export class SnackService extends AbstractSnackService {
  private defaultTimeout = 3000;
  private timeout?: any;
  private subjectMessage = new Subject<SnackMessage | null>();
  override message = this.subjectMessage.asObservable();

  protected clearTimeout() {
    clearTimeout(this.timeout);
  }
  
  showMessage(message: SnackMessage, timeout?: number): void {
    this.subjectMessage.next(message);
    this.clearTimeout();
    this.timeout = setTimeout(() => {
      this.hide();
    }, timeout || this.defaultTimeout);
  }

  hide(): void {
    this.subjectMessage.next(null);
  }
}
