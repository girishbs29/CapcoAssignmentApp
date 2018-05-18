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
  private gridApi;
  private gridColumnApi;
  private pageNo = 1;
  private paginationPageSize = 10;
  private title = 'Capco Customer List';
  private columnDefs = [
    {headerName: '', field: 'id', cellRenderer: 'buttonComponent'},
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

  private frameworkComponents = {
      buttonComponent: ButtonComponent
  };

  private rowData: any;

  constructor(@Inject(ICustomerServiceToken) private readonly customerService: ICustomerService,
              @Inject(ILoggerToken) private readonly logger: ILogger) {
  }

  private paginationNumberFormatter(params): string {
    return '[' + params.value.toLocaleString() + ']';
  }

  ngOnInit(): void {
    this.rowData = this.customerService.getCustomers(this.pageNo, this.paginationPageSize);
  }

  onPageSizeChanged(newPageSize) {
    const value = (document.getElementById('page-size') as any).value;
    this.gridApi.paginationSetPageSize(Number(value));
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.customerService.getCustomers(this.pageNo, this.paginationPageSize)
      .subscribe(data => {
        params.api.setRowData(data);
        params.api.paginationGoToPage(this.pageNo);
      });
  }
}
