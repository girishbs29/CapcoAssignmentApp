import { Component, OnInit, Inject } from '@angular/core';
import { ICustomer } from './customers/ICustomer';
import { ICustomerService } from './customers/ICustomerService';
import { ICustomerServiceToken } from './config.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(@Inject(ICustomerServiceToken) private readonly customerService: ICustomerService) {
  }

  ngOnInit(): void {
    this.rowData = this.customerService.getCustomers();
  }

  title: string = 'Capco Customer List';
  columnDefs = [
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

  rowData: ICustomer[] = [];
}
