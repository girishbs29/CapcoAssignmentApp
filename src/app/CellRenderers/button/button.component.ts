import {Component, Inject} from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular';
import { ICellRendererParams, IAfterGuiAttachedParams } from 'ag-grid';
import { ICustomerServiceToken } from '../../config.token';
import { ICustomerService } from '../../Services/Customers/ICustomerService';

@Component({
  selector: 'app-child-cell',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements ICellRendererAngularComp {
  private _params: any;

  constructor(@Inject(ICustomerServiceToken) private readonly customerService: ICustomerService) {
  }

  refresh(params: any): boolean {
    if (params !== null) {
      this._params = params;
      return true;
    }
    return false;
  }

  agInit(params: ICellRendererParams): void {
    if (params !== null) {
      this._params = params;
    }
  }

  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
  }

  onClick(params: any): void {
    this.customerService.updateCustomer(this._params.data.id);
  }
}
