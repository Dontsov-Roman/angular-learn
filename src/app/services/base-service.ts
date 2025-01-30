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
    getById(id: number): Promise<Item>;
    getList(pagination?: Partial<Pagination>): Promise<ListType<Item>>;
    update(item: Partial<Item> & ID): Promise<Item>;
    create(item: Partial<Item>): Promise<Item>;
    deleteById(id: number): Promise<boolean>;
}