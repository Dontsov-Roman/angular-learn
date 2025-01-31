import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';

import { CacheRequestService } from '../services/cache-request.service';
import { filter, first, shareReplay } from 'rxjs';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private cacheService: CacheRequestService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if ( req.method !== 'GET') {
      return next.handle(req);
    }
    let cached = this.cacheService.getItem(req);
    if (!cached) {
      cached = next.handle(req).pipe(
        filter(e => e instanceof HttpResponse),
        shareReplay(1)
      )
      cached = this.cacheService.setItem(req, cached);
    }
    return cached.pipe(first());
  }
}