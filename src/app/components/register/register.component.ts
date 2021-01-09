import { UserData } from './../../models/userdata.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public userData: UserData = {
    username: "",
    password:""
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit() {
    console.log(this.userData);
  }

}
