import {
  Catch,
  ArgumentsHost,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { TeosCliErrorException } from '../../modules/run-command/error/cli-exception';
import { TeosCliError } from '../../modules/run-command/error/cli.error';

@Catch()
export class GlobalExceptionsFilter extends BaseExceptionFilter {
  constructor() {
    super();
  }

  catch(exception: unknown, host: ArgumentsHost) {
    if (exception instanceof Error) {
      if (exception instanceof TeosCliError) {
        const cliException = TeosCliErrorException.new(exception);
        super.catch(cliException, host);
      } else {
        const errorMessage = exception.message || 'Something went wrong';
        super.catch(
          new HttpException(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR),
          host,
        );
      }
    } else if (typeof exception == 'string') {
      super.catch(
        new HttpException(
          exception || 'Something went wrong',
          HttpStatus.INTERNAL_SERVER_ERROR,
        ),
        host,
      );
    }
  }
}
