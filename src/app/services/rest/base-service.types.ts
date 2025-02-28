import { Observable } from "rxjs";

import { Pagination, PaginationMeta } from "../pagination";
import { AbstractWithUrls } from "../with-url.types";

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

export abstract class AbstractBaseService<Item extends ID> extends AbstractWithUrls implements IBaseService<Item> {
    abstract getById(id: number): Observable<Item>;
    abstract getList(pagination?: Partial<Pagination>): Observable<ListType<Item>>;
    abstract update(item: Partial<Item> & ID): Observable<Item>;
    abstract create(item: Partial<Item>): Observable<Item>;
    abstract deleteById(id: number): Observable<boolean>;
}