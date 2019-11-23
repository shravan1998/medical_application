import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BillingComponent} from './billing/billing.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SalesInvoiceComponent} from './sales-invoice/sales-invoice.component';
import {DebitNoteComponent} from './debit-note/debit-note.component';
import {ItemBatchComponent} from './item-batch/item-batch.component';
import {PurchaseComponent} from './purchase/purchase.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path:'',component:HomeComponent
},

{
  path:'dashboard',component:DashboardComponent
},{
  path:'dashboard/invoice',component:SalesInvoiceComponent
},{
  path:'dashboard/debit_note',component:DebitNoteComponent
},
{
  path:'dashboard/item_batch',component:ItemBatchComponent
},
{
  path:'dashboard/purchase',component:PurchaseComponent
},
{
  path:'dashboard/purchase/bill',component:BillingComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
