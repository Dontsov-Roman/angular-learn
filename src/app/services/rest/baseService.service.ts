import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

import { ID, IBaseService, AbstractBaseService } from "./base-service.types"
import { Pagination } from "../pagination";

@Injectable()
export class BaseService<ItemType extends ID> extends AbstractBaseService<ItemType> implements IBaseService<ItemType> {
    protected baseUrl = '';
    constructor(private http: HttpClient) { 
        super();
    }
    
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