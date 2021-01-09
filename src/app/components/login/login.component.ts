import { STORAGE_USER } from './../../properties';
import { FeedbackService } from './../../services/feedback.service';
import { UserData } from './../../models/userdata.model';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AUTHORIZATION_HEADER, STORAGE_KEY_TOKEN } from '../../properties';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public httpCode = 0;
  public loginData: UserData = {
    username: "", password: ""
  }

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _feedback: FeedbackService
  ) { }

  ngOnInit(): void {

  }

  loginUser() {

    this._auth.loginUser(this.loginData)
      .subscribe(
        this.handleSubmit,
        this.handleError,
        this.completeAction
      )
  }

  private handleSubmit = (response: HttpResponse<any>) => {
    if (response.status === 200) {
      const token = response.headers.get(AUTHORIZATION_HEADER);
      const user = response.body;
      localStorage.setItem(STORAGE_KEY_TOKEN, token);
      localStorage.setItem(STORAGE_USER, JSON.stringify(user));
      this._router.navigate(['/student'])
    }
  }

  private handleError = (error: HttpErrorResponse) => {
    if(error.status === 403)
      this.httpCode = 403;
  }

  private completeAction = () => {
    this._feedback.feedbackSucess("Vous êtes connecté", "fermer");
  }

}
