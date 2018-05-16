import { InjectionToken } from "@angular/core";
import { ICustomerService } from "./customers/ICustomerService";

export let ICustomerServiceToken = new InjectionToken<ICustomerService>('ICustomerService');