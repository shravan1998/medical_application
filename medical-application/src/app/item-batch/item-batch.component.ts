import { Component, OnInit } from '@angular/core';
import {ItemBatchService} from '../item-batch.service';

@Component({
  selector: 'app-item-batch',
  templateUrl: './item-batch.component.html',
  styleUrls: ['./item-batch.component.css']
})
export class ItemBatchComponent implements OnInit {
  item:String;
  mrp:Number;
  exp:String;
  public details;
  constructor(private itembatchservice:ItemBatchService) { }

  ngOnInit() {
    this.itembatchservice.getItem().subscribe((data)=>{
      this.details=data;
    });
  }
  getItem(data){
    
    this.itembatchservice.setItem(data).subscribe((data)=>{
      this.ngOnInit();
    });

}
}