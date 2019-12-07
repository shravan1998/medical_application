import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient,HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http:HttpClient) { }
  url='http://localhost:8000/api';
  getBill(){
    
    return this.http.get(`${this.url}/purchase`);
  }
  clear(){
    return this.http.get(`${this.url}/clear`); 
  }
  history(){
    return this.http.get(`${this.url}/history`);
  }
}
