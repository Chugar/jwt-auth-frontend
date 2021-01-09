import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Auth';

  constructor(private _auth: AuthService) {
  }


  public logOut() {
    this._auth.logoutUser();
  }

  public isLoggedIn() {
    return this._auth.isLoggedIn();
  }
}
