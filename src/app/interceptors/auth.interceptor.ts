import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = this.auth.getAuthToken();

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = authToken ? req.clone({
      headers: req.headers.set('Authorization', authToken)
    }) : req;

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}