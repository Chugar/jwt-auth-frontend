import { FeedbackService } from './feedback.service';
import { Router } from '@angular/router';
import { STORAGE_USER, STORAGE_KEY_TOKEN } from './../properties';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { UserData } from './../models/userdata.model';
import { Route } from '@angular/compiler/src/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = `${environment.url_api}/register`;
  private loginUrl = `${environment.url_api}/login`;

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _feedback: FeedbackService
  ) { }

  registerUser(user: UserData) {
    return this._http.post(this.registerUrl, user);
  }

  loginUser(user: UserData) {
    return this._http.post(this.loginUrl, user, {observe: 'response'});
  }

  logoutUser() {
    localStorage.removeItem(STORAGE_KEY_TOKEN);
    localStorage.removeItem(STORAGE_USER);
    this._router.navigate(['/login']).then(
      () => this._feedback.feedbackSucess("Vous avez été deconnecté", "fermer")
    )
  }

  isLoggedIn() {
    return localStorage.getItem(STORAGE_USER) != null;
  }


}
