import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient,HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  url='http://localhost:8000/api';
  constructor(private http:HttpClient) {
    
   }
   getInvoice(item){
    console.log(item);
    return this.http.post(`${this.url}/invoice`,item);
  }
  
  getdata(){
    return this.http.get(`${this.url}/invoice`); 
  }
  setNote(item){
    return this.http.post(`${this.url}/debit-note`,item);
  }
  getNote(){
    return this.http.get(`${this.url}/debit-note`);
  }
}
