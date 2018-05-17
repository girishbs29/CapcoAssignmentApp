import { Injectable, NgModule, Inject } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { ICustomerService } from "./ICustomerService";
import { ICustomer } from "./ICustomer";
import { ILoggerToken } from "../../config.token";
import { ILogger } from '../../Utils/Logger/ILogger';

@Injectable({
    providedIn: NgModule
})
export class CustomerService implements ICustomerService {
    private _customerAPIUrl = './app/DataStore/sample_data.json';

    constructor(@Inject(ILoggerToken) private readonly logger: ILogger,
                private _httpClient: HttpClient) {
        logger.Log(document.location.toString());
    }

    getCustomers(): Observable<ICustomer[]> {
        return this._httpClient.get<ICustomer[]>(this._customerAPIUrl);
    }

    private handleError(error: HttpErrorResponse) {
        this.logger.Log(error.message);
        return Observable.throw(error);
    }
}