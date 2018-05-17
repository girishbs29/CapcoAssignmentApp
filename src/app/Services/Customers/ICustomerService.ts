import { ICustomer } from "./ICustomer";
import { Observable } from "rxjs/internal/Observable";

export interface ICustomerService {
    getCustomers(): Observable<ICustomer[]>;
}