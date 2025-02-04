export interface IWithUrl {
    baseUrl: string;
    url: string;
    fullUrl: string;
}
export abstract class AbstractWithUrls {
    protected abstract baseUrl: string;
    protected abstract url: string;
    protected abstract fullUrl: string;
}