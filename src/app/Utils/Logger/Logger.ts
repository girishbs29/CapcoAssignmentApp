import { ILogger } from './ILogger';

export class Logger implements ILogger {
    Log(message: string) {
        console.log(message);
    }
}
