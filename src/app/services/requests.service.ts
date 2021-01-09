import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  public getSutdents() {
    return this.http.get(`${environment.url_api}/student`);
  }

  public getTeachers() {
    return this.http.get(`${environment.url_api}/teacher`);
  }
}
