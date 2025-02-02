import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export type SnackMessage = {
  message: string;
  actionTitle?:  string;
  action?: Function;
};

@Injectable()
export class SnackService {
  private defaultTimeout = 3000;
  private timeout?: any;
  private subjectMessage = new Subject<SnackMessage | null>();
  message = this.subjectMessage.asObservable();

  private clearTimeout() {
    clearTimeout(this.timeout);
  }
  showMessage(message: SnackMessage, timeout?: number): void {
    this.subjectMessage.next(message);
    this.clearTimeout();
    this.timeout = setTimeout(() => {
      this.hide();
    }, timeout || this.defaultTimeout);
  }
  hide() {
    this.subjectMessage.next(null);
  }
}
