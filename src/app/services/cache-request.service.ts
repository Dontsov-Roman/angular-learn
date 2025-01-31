import { HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ICacheService<T> {
  getItem(req: HttpRequest<any>): T | undefined;
  setItem(req: HttpRequest<any>, response: any): T;
}

type CachedType = Observable<HttpEvent<any>>;

@Injectable({
  providedIn: 'root'
})
export class CacheRequestService implements ICacheService<CachedType> {
  private cached = new Map<string, CachedType>();
  private cachedTime = new Map<string, number>();
  private ttl = 5000;
  constructor() { }
  getItem(req: HttpRequest<any>): CachedType | undefined {
    const key = this.getKeyByRequest(req);
    if (this.checkTime(key))
      return this.cached.get(key);
    return undefined;
  }
  setItem(req: HttpRequest<any>, response: CachedType): CachedType {
    const key = this.getKeyByRequest(req);
    this.cachedTime.set(key, Date.now());
    this.cached.set(key, response);
    return response
  }
  private getKeyByRequest(req: HttpRequest<any>): string {
    return `${req.url}:${req.params.toString()}`;
  }
  private checkTime(key: string): boolean {
    const time = this.cachedTime.get(key);
    return Boolean(time && Date.now() < time + this.ttl);
  }
}
