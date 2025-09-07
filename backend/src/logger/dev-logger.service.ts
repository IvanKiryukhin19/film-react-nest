import { Injectable, ConsoleLogger } from '@nestjs/common';

@Injectable()
export class DevLogger extends ConsoleLogger {
  log(message: any) {
    console.log(message, 'DevLogger');
  }

  error(message: any, trace?: string) {
    console.error(message, trace, 'DevLogger');
  }

  warn(message: any) {
    console.warn(message, 'DevLogger');
  }

  debug(message: any) {
    console.debug(message, 'DevLogger');
  }
}
