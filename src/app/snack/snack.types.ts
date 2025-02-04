import { Observable } from "rxjs";

export enum MessageType {
  Default = 'default',
  Alert = 'alert',
  Warn = 'warn',
  Info = 'info',
}
export type SnackMessage = {
  message: string;
  type?: MessageType;
  actionTitle?:  string;
  action?: Function;
};

export abstract class AbstractSnackService {
    abstract message: Observable<SnackMessage | null>;
    protected abstract  clearTimeout(): void;
    abstract showMessage(message: SnackMessage, timeout?: number): void;
    abstract hide(): void;
}