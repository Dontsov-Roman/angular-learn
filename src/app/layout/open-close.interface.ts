export interface IOpenClose<Result extends any> {
    open(): Promise<Result>;
    close(): Promise<Result>;
    toggle(): Promise<Result>;
}

export interface IOpenCloseService<Result extends any> extends IOpenClose<Result> {
    setEntity(entity: IOpenClose<Result>): void;
    opened: boolean;
}