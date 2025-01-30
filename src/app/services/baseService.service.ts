import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { ID, BaseService as IBaseService } from "./base-service"
import { Pagination } from "./pagination";
import { map, Observable } from "rxjs";

@Injectable()
export class BaseService<ItemType extends ID> implements IBaseService<ItemType> {
    protected baseUrl = '';
    constructor(private http: HttpClient) { }

    getById(id: number): Observable<ItemType> {
        return this.http.get<ItemType>(`${this.baseUrl}/${id}`);
    }
    getList(pagination?: Partial<Pagination>) {
        return this.http.get<ItemType[]>(this.baseUrl, { params: pagination })
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