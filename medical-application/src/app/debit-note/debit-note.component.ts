import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {InvoiceService} from '../invoice.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-debit-note',
  templateUrl: './debit-note.component.html',
  styleUrls: ['./debit-note.component.css']
})
export class DebitNoteComponent implements OnInit {
  public details;
  srno:Number;
  supplier:String;
  date:Date;
  constructor(private invoiceservice:InvoiceService) { }

  ngOnInit() {
    this.invoiceservice.getNote().subscribe((data)=>{
      this.details=data;
    });
  }
  getDebit(data){
    console.log(data);
    this.invoiceservice.setNote(data).subscribe((data)=>{
      this.ngOnInit();
    });
  }
}
