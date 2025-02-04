import { Observable } from "rxjs";
import { Pagination, PaginationMeta } from "../pagination";

export type ID = {
    id: number;
}
export type ListType<Item extends ID> = {
    data: Item[];
    pagination: PaginationMeta;
} 
export interface IBaseService<Item extends ID> {
    getById(id: number): Observable<Item>;
    getList(pagination?: Partial<Pagination>): Observable<ListType<Item>>;
    update(item: Partial<Item> & ID): Observable<Item>;
    create(item: Partial<Item>): Observable<Item>;
    deleteById(id: number): Observable<boolean>;
}

export abstract class AbstractBaseService<Item extends ID> implements IBaseService<Item> {
    protected abstract baseUrl: string;
    protected abstract url: string;
    protected abstract fullUrl: string;
    abstract getById(id: number): Observable<Item>;
    abstract getList(pagination?: Partial<Pagination>): Observable<ListType<Item>>;
    abstract update(item: Partial<Item> & ID): Observable<Item>;
    abstract create(item: Partial<Item>): Observable<Item>;
    abstract deleteById(id: number): Observable<boolean>;
}