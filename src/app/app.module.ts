import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { ICustomerServiceToken } from './config.token';
import { CustomerService } from './customers/CustomerService';
import { Token } from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([])
  ],
  providers: [{provide: ICustomerServiceToken, useClass: CustomerService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
