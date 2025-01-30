import { Observable } from "rxjs";
import { Pagination, PaginationMeta } from "./pagination";

export type ID = {
    id: number;
}
export type ListType<Item extends ID> = {
    data: Item[];
    pagination: PaginationMeta;
} 
export interface BaseService<Item extends ID> {
    getById(id: number): Observable<Item>;
    getList(pagination?: Partial<Pagination>): Observable<ListType<Item>>;
    update(item: Partial<Item> & ID): Observable<Item>;
    create(item: Partial<Item>): Observable<Item>;
    deleteById(id: number): Observable<boolean>;
}