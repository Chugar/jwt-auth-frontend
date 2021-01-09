import { Observable } from 'rxjs';
import { RequestsService } from './../../services/requests.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {

  public teachers$: Observable<any>;

  constructor(private _requests: RequestsService) { }

  ngOnInit(): void {
    this.teachers$ = this._requests.getTeachers();
  }

}
