import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SalesInvoiceComponent} from './sales-invoice/sales-invoice.component';
import {DebitNoteComponent} from './debit-note/debit-note.component';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path:'',component:HomeComponent
},
{
  path:'login',component:LoginComponent
},
{
  path:'register',component:RegisterComponent
},
{
  path:'dashboard',component:DashboardComponent
},{
  path:'dashboard/invoice',component:SalesInvoiceComponent
},{
  path:'dashboard/debit_note',component:DebitNoteComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
