import { RequestsService } from './../../services/requests.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  public students$: Observable<any>;

  constructor(private _requests: RequestsService) { }

  ngOnInit(): void {
    this.students$ = this._requests.getSutdents();
  }

}
