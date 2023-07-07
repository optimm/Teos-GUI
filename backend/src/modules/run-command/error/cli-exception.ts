import { HttpException, HttpStatus } from '@nestjs/common';
import { TeosCliError } from './cli.error';

export class TeosCliErrorException extends HttpException {
  constructor(message: string, statusCode: HttpStatus) {
    super(message, statusCode);
  }

  public static new(error: TeosCliError): TeosCliErrorException {
    const errorMessage = error.message;
    const statusCode = this.getStatusCode(errorMessage);
    return new TeosCliErrorException(errorMessage, statusCode);
  }

  private static getStatusCode(message: string): HttpStatus {
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    if (
      message.includes('Locator') ||
      message.includes('locator') ||
      message.includes('Public key') ||
      message.includes('public key')
    ) {
      statusCode = HttpStatus.BAD_REQUEST;
    } else if (message.includes('Could not connect to tower')) {
      statusCode = HttpStatus.SERVICE_UNAVAILABLE;
    } else if (message.includes('User not found' || 'user not found')) {
      statusCode = HttpStatus.NOT_FOUND;
    }
    return statusCode;
  }
}
