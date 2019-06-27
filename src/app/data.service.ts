import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import {Observable} from 'rxjs';
//import 'rxjs/add/operator/catch';
//import 'rxjs/data/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users')
  }
  /*errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message || "Service Error");
  }*/
}
