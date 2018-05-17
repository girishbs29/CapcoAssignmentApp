import { InjectionToken } from "@angular/core";
import { ICustomerService } from "./customers/ICustomerService";
import { ILogger } from "./Logger/ILogger";

export let ICustomerServiceToken = new InjectionToken<ICustomerService>('ICustomerService');
export let ILoggerToken = new InjectionToken<ILogger>('ILogger');