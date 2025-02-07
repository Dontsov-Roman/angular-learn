import { Injectable, OnDestroy, signal } from '@angular/core';
import { interval } from 'rxjs';
import { ISnackService, SnackMessage } from './snack.types';

@Injectable()
export class SnackService implements ISnackService, OnDestroy {
  private defaultTimeout = 3000;
  messages = signal<SnackMessage[]>([]);
  private intervalSubscriber = interval(300).subscribe(() => this.clearOldMessages());

  private clearOldMessages() {
    const oldMessages = this.messages();
    const newMessages = oldMessages.filter(({ ttl }) => ttl && ttl > Date.now());
    if (newMessages.length !== oldMessages.length) {
      this.messages.set(newMessages);
    }
  }
  
  showMessage(message: SnackMessage, timeout?: number): void {
    const ttl = Date.now() + (timeout || this.defaultTimeout);
    const newMessage = { ...message, ttl };
    this.messages.set([...this.messages(), newMessage]);
  }

  hide(message: SnackMessage): void {
    this.messages.set(this.messages().filter(msg => msg.ttl && msg.ttl !== message.ttl));
  }

  ngOnDestroy(): void {
    this.intervalSubscriber.unsubscribe();
  }
}
