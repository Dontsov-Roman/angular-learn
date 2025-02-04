import { Observable } from "rxjs";

export type SnackMessage = {
  message: string;
  actionTitle?:  string;
  action?: Function;
};

export abstract class AbstractSnackService {
    abstract message: Observable<SnackMessage | null>;
    protected abstract  clearTimeout(): void;
    abstract showMessage(message: SnackMessage, timeout?: number): void;
    abstract hide(): void;
}