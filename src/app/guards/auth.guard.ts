import { STORAGE_KEY_TOKEN, STORAGE_USER } from './../properties';
import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem(STORAGE_KEY_TOKEN) && localStorage.getItem(STORAGE_USER))
      return true;
  }

}
