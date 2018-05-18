import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { ICustomerServiceToken, ILoggerToken } from './config.token';
import { CustomerService } from './Services/Customers//CustomerService';
import { Token } from '@angular/compiler';
import { Logger } from './Utils/Logger/Logger';
import { ButtonComponent } from './CellRenderers/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([ButtonComponent]),
    HttpClientModule
  ],
  providers: [
    {provide: ICustomerServiceToken, useClass: CustomerService},
    {provide: ILoggerToken, useClass: Logger}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
