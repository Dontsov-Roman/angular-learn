import { Inject, Injectable, InjectionToken, Optional } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Observable } from "rxjs";

import { ID, IBaseService, AbstractBaseService } from "./base-service.types"
import { Pagination } from "../pagination";

export const BASE_SERVICE_URL_TOKEN = new InjectionToken<string>("base url injection");
export const SERVICE_URL_TOKEN = new InjectionToken<string>("current url injection");

@Injectable()
export class BaseService<ItemType extends ID> extends AbstractBaseService<ItemType> implements IBaseService<ItemType> {
    constructor(
        private http: HttpClient,
        @Inject(BASE_SERVICE_URL_TOKEN) protected baseUrl: string,
        @Inject(SERVICE_URL_TOKEN) protected url: string,
    ) { 
        super();
    }
    
    getById(id: number): Observable<ItemType> {
        return this.http.get<ItemType>(`${this.fullUrl}/${id}`);
    }
    getList(pagination?: Partial<Pagination>) {
        return this.http.get<ItemType[]>(this.fullUrl, { params: pagination })
            .pipe(map((data) => ({ data, pagination: { ...pagination, total: data.length } })));
    }
    create(item: Partial<ItemType>) {
        return this.http.post<ItemType>(this.fullUrl, item);
    }
    
    update(item: Partial<ItemType> & ID) {
        return this.http.put<ItemType>(`${this.fullUrl}/${item.id}`, item);
    }
    
    deleteById(id: number) {
        return this.http.delete<boolean>(`${this.fullUrl}/${id}`);
    }
}