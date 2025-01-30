import { Inject, Injectable } from "@angular/core";
import { ID, BaseService as IBaseService, ListType } from "./base-service"
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pagination, PaginationMeta } from "./pagination";

@Injectable()
export class BaseService<ItemType extends ID> implements IBaseService<ItemType> {
    protected baseUrl = '';
    constructor(private http: HttpClient) { }

    async getById(id: number): Promise<ItemType> {
        return (await fetch(`${this.baseUrl}/${id}`, )).json();
    }
    async getList(pagination?: Partial<Pagination>): Promise<ListType<ItemType>> {
        const data = await (await fetch(this.baseUrl)).json() as unknown as ItemType[];
        return { data, pagination: { ...pagination, total: data.length } };
    }
    async create(item: Partial<ItemType>): Promise<ItemType> {
        return (await fetch(this.baseUrl, { method: 'POST', body: JSON.stringify(item) })).json();
    }
    
    async update(item: Partial<ItemType>): Promise<ItemType> {
        return (await fetch(`${this.baseUrl}/${item.id}`, { method: 'PUT', body: JSON.stringify(item) })).json();
    }
    
    async deleteById(id: number): Promise<boolean> {
        return (await fetch(`${this.baseUrl}/${id}`, { method: 'DELETE' })).ok;
    }
}