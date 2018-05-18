import { Injectable, NgModule, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs';
import { ICustomerService } from './ICustomerService';
import { ICustomer } from './ICustomer';
import { ILoggerToken } from '../../config.token';
import { ILogger } from '../../Utils/Logger/ILogger';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: NgModule
})
export class CustomerService implements ICustomerService {
    private _customerAPIUrl = './app/DataStore/sample_data.json';

    constructor(@Inject(ILoggerToken) private readonly logger: ILogger,
                private readonly _httpClient: HttpClient) {
    }

    getCustomers(pageNo: number, pageSize: number): Observable<ICustomer[]> {
        return this._httpClient.get<ICustomer[]>(this._customerAPIUrl)
                                .pipe(catchError(this.handleError));
    }

    updateCustomer(id: number): void {
        this.logger.Log('Call a real service to post for id=' + id.toString());
    }

    private handleError(error: HttpErrorResponse) {
        this.logger.Log(error.message);
        return throwError(error);
    }
}
