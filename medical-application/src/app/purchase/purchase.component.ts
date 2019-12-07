import { Component, OnInit } from '@angular/core';
import {PurchaseService} from '../purchase.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  public details;
  constructor(private purchaseservice:PurchaseService) {
    
  }

  ngOnInit() {
    this.purchaseservice.history().subscribe((data)=>{
      this.details=data;
    });
  }

  clear(){
    this.purchaseservice.clear().subscribe((data)=>{
      this.details=data;
    });


  
  }
}
