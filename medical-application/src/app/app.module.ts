import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesInvoiceComponent } from './sales-invoice/sales-invoice.component';
import { DebitNoteComponent } from './debit-note/debit-note.component';
import { ItemBatchComponent } from './item-batch/item-batch.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { BillingComponent } from './billing/billing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  
    DashboardComponent,
    SalesInvoiceComponent,
    DebitNoteComponent,
    ItemBatchComponent,
    PurchaseComponent,
    BillingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
