import { Component, OnInit, Inject } from '@angular/core';
import { ICustomer } from './Services/Customers/ICustomer';
import { ICustomerService } from './Services/Customers/ICustomerService';
import { ICustomerServiceToken, ILoggerToken } from './config.token';
import { ILogger } from './Utils/Logger/ILogger';
import { ButtonComponent } from './CellRenderers/button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Capco Customer List';
  columnDefs = [
      {headerName: '', field: 'id', cellRenderer: "buttonComponent", colId: "params"},
      {headerName: 'Name', field: 'name' },
      {headerName: 'Phone', field: 'phone' },
      {headerName: 'Email', field: 'email'},
      {headerName: 'Company', field: 'company'},
      {headerName: 'Date entry', field: 'date_entry'},
      {headerName: 'Contact No', field: 'org_num'},
      {headerName: 'Address', field: 'address_1'},
      {headerName: 'City', field: 'city'},
      {headerName: 'Zip', field: 'zip'},
      {headerName: 'Geo Location', field: 'geo'},
      {headerName: 'Pan', field: 'pan'},
      {headerName: 'Pin', field: 'pin'},
      {headerName: 'Status', field: 'status'},
      {headerName: 'Fee', field: 'fee'},
      {headerName: 'Date Closed', field: 'date_exit'},
      {headerName: 'Date Opened', field: 'date_first'},
      {headerName: 'Date last visited', field: 'date_recent'},
      {headerName: 'Url', field: 'url'}
    ];

    frameworkComponents = {
      buttonComponent: ButtonComponent
    };

    rowData: any;//ICustomer[] = [];

    constructor(@Inject(ICustomerServiceToken) private readonly customerService: ICustomerService,
              @Inject(ILoggerToken) private readonly logger: ILogger) {
  }

  ngOnInit(): void {
    // this.customerService.getCustomers()
    //                     .subscribe(customers => this.rowData = customers,
    //                                 error => this.logger.Log(error));
    this.rowData = this.customerService.getCustomers();
  }
}
