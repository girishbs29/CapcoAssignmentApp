import { ICustomer } from "./ICustomer";

export interface ICustomerService {
    getCustomers(): ICustomer[];
}