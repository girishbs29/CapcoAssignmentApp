import { InjectionToken } from "@angular/core";
import { ICustomerService } from './Services/Customers/ICustomerService';
import { ILogger } from './Utils/Logger/ILogger';

export let ICustomerServiceToken = new InjectionToken<ICustomerService>('ICustomerService');
export let ILoggerToken = new InjectionToken<ILogger>('ILogger');