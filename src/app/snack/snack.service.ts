import { Injectable, signal } from '@angular/core';
import { from, interval, map, of } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { ISnackService, SnackMessage } from './snack.types';

@Injectable()
export class SnackService implements ISnackService {
  private defaultTimeout = 3000;
  messages = signal<SnackMessage[]>([]);
  messages$ = toObservable(this.messages);
  // interval$ = interval(300).pipe(map(() => this.clearOldMessages()));
  // private interval = interval(this.defaultTimeout).subscribe(() => this.clearOldMessages());

  clearOldMessages() {
    const oldMessages = this.messages();
    const newMessages = oldMessages.filter(({ ttl }) => ttl && ttl > Date.now());
    console.log(newMessages.length !== oldMessages.length);
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
    // this.clearOldMessages(message.ttl);
  }

}
