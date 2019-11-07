import { Component, OnInit } from '@angular/core';
import {InvoiceService} from '../invoice.service';

@Component({
  selector: 'app-sales-invoice',
  templateUrl: './sales-invoice.component.html',
  styleUrls: ['./sales-invoice.component.css']
})
export class SalesInvoiceComponent implements OnInit {
  master:String;
  item:String;
  itemname:String;
  branch:String;
  expiry:String;
  disc:Number;
  quantity:number;
  salesrt:number;
  mrpbox:Number;
  cgst:Number;
  sgst:Number;
  amount:Number;
  dosage:Number;
  doctorid:String;
  customerid:String;
  payment:String;
  netamount:Number;
  public details;
  

  constructor(private invoiceservice:InvoiceService) { }

  ngOnInit() {
    

  }
  onSave(item){
    this.invoiceservice.getInvoice(item).subscribe();
    
  }
  onCal(disc,quantity,mrp,event){
    event.target.value=(mrp.value-((mrp.value)*(disc.value/100)))*quantity.value;
    
  }
  NetAmount(disc,quantity,mrp,cgst,sgst,event){
    event.target.value=Math.round((mrp.value-((mrp.value)*(disc.value/100))+((mrp.value)*(cgst.value/100))
    +(mrp.value)*(sgst.value/100))*quantity.value);
    
  }
 
}
