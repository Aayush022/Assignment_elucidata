import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  @Output() showLoader$ : EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get("https://reqres.in/api/users?delay=3");
  }
  showLoader(){
    this.showLoader$.emit(true);
  }

  hideLoader(){
    this.showLoader$.emit(false);
  }
}
