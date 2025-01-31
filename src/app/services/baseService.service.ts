import { Injectable } from "@angular/core";
import { HttpClient, HttpContext } from "@angular/common/http";
import { map, Observable } from "rxjs";

import { ID, BaseService as IBaseService } from "./base-service"
import { Pagination } from "./pagination";
import { SKIP_CACHING } from "../interceptors/cache.interceptor";

@Injectable()
export class BaseService<ItemType extends ID> implements IBaseService<ItemType> {
    protected baseUrl = '';
    constructor(private http: HttpClient) { }
    
    getById(id: number): Observable<ItemType> {
        return this.http.get<ItemType>(`${this.baseUrl}/${id}`);
    }
    getList(pagination?: Partial<Pagination>) {
        // context: new HttpContext().set(SKIP_CACHING, true)
        return this.http.get<ItemType[]>(this.baseUrl, { params: pagination, context: new HttpContext().set(SKIP_CACHING, true) })
            .pipe(map((data) => ({ data, pagination: { ...pagination, total: data.length } })));
    }
    create(item: Partial<ItemType>) {
        return this.http.post<ItemType>(this.baseUrl, item);
    }
    
    update(item: Partial<ItemType> & ID) {
        return this.http.put<ItemType>(`${this.baseUrl}/${item.id}`, item);
    }
    
    deleteById(id: number) {
        return this.http.delete<boolean>(`${this.baseUrl}/${id}`);
    }
}