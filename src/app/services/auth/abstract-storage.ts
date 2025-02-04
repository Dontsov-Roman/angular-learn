export abstract class AbstractStorage {
    abstract getToken(): Promise<string | null>;
    abstract setToken(token: string): void;
    abstract removeToken(): void;
}