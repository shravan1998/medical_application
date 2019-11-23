import { Component, OnInit } from '@angular/core';
import {PurchaseService} from '../purchase.service';
@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  constructor(private purchaseservice:PurchaseService) { }
  public details;
  ngOnInit() {
    this.purchaseservice.getBill().subscribe((data)=>{
      this.details=data;
    });
  }

  printbill(){
    print();
   
  }
  

  }


