import { Component, OnInit } from '@angular/core';
import {InvoiceService} from '../invoice.service';
import {AlternativeService} from '../alternative.service';
import { from } from 'rxjs';

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
  address:String;
  public details;
  public details1;
  

  constructor(private invoiceservice:InvoiceService,private alternativeservice:AlternativeService) { }

  ngOnInit() {
   this.invoiceservice.getdata().subscribe((data)=>{
      
      this.details=data;
    });

  }
  onSave(item){
    console.log(item);
    this.invoiceservice.getInvoice(item).subscribe((data)=>{
      this.ngOnInit();
    });
    
  }
  onCal(disc,quantity,mrp,amount,event){
    event.target.value=(mrp.value-((mrp.value)*(disc.value/100)))*quantity.value;
    amount.value=event.target.value;
    this.amount = amount.value;
    console.log(amount.value);
    
  }
  NetAmount(disc,quantity,mrp,cgst,sgst,netamount,event){
    event.target.value=Math.round((mrp.value-((mrp.value)*(disc.value/100))+((mrp.value)*(cgst.value/100))
    +(mrp.value)*(sgst.value/100))*quantity.value);
    netamount.value=event.target.value;
    this.netamount = netamount.value;
    console.log(netamount.value);

  }
  Search(item){
    console.log(item);
    this.alternativeservice.getdata().subscribe((data)=>{
      
      this.details1=data;
    });
 
  }
 
}
