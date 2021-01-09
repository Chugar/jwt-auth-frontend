import { STORAGE_KEY_TOKEN } from './../properties';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let token = '';
    if (localStorage.getItem(STORAGE_KEY_TOKEN) !== null)
      token = localStorage.getItem(STORAGE_KEY_TOKEN);

    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: token
      }
    });

    return next.handle(tokenizedReq);
  }
}
