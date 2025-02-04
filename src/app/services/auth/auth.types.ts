import { Observable } from "rxjs";
import { AbstractWithUrls } from "../with-url.types";
import { InjectionToken } from "@angular/core";

export type WithToken = {
    token: string;
}
export abstract class AbstractAuth extends AbstractWithUrls {
    abstract loginRequest(username: string, password: string): Observable<WithToken>;
    abstract login(username: string, password: string): Promise<boolean>;
    abstract setToken(token: string): void;
    abstract logout(): Promise<void>;
    abstract getAuthToken(): string | undefined;
    abstract isAuthenticated(): boolean
}
export const LOGIN_URL_TOKEN = new InjectionToken('Sign in url');
