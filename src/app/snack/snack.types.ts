import { Signal } from "@angular/core";

export enum MessageType {
  Default = 'default',
  Alert = 'alert',
  Warn = 'warn',
  Info = 'info',
}
export type SnackMessage = {
  message: string;
  ttl?: number;
  type?: MessageType;
  actionTitle?:  string;
  action?: Function;
};

export interface ISnackService {
  messages: Signal<SnackMessage[]>;
  showMessage(message: SnackMessage, timeout?: number): void;
  hide(message: SnackMessage): void;
}
