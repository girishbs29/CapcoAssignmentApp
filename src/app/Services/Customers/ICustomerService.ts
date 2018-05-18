import { ICustomer } from './ICustomer';
import { Observable } from 'rxjs/internal/Observable';

export interface ICustomerService {
    getCustomers(pageNo: number, pageSize: number): Observable<ICustomer[]>;
    updateCustomer(id: number): void;
}
