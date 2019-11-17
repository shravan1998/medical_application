import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient,HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlternativeService {
  url='http://localhost:8000/api';
  constructor(private http:HttpClient) { }
  
  getdata(){
    return this.http.get(`${this.url}/alternative`); 
  }

}
