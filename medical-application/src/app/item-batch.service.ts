import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient,HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemBatchService {
  url='http://localhost:8000/api';
  constructor(private http:HttpClient) { }
  setItem(item){
    return this.http.post(`${this.url}/item`,item);
  }
  getItem(){
    return this.http.get(`${this.url}/item`);
  }
}
