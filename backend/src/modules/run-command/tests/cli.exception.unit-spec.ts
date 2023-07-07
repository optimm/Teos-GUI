import { HttpStatus } from '@nestjs/common';
import { TeosCliErrorException } from '../error/cli-exception';
import { TeosCliError } from '../error/cli.error';

describe('TeosCliErrorException', () => {
  it('check: should create a TeosCliErrorException with the appropriate message', () => {
    const error = new TeosCliError('Some error message');

    const exception = TeosCliErrorException.new(error);

    expect(exception).toBeInstanceOf(TeosCliErrorException);
    expect(exception.message).toBe('Some error message');
  });

  it('check: should give proper status codes', () => {
    const internalServerError = new TeosCliError('Internal server');
    const exception1 = TeosCliErrorException.new(internalServerError);
    expect(exception1.getStatus()).toBe(HttpStatus.INTERNAL_SERVER_ERROR);

    const serviceUnavailableError = new TeosCliError(
      'Could not connect to tower',
    );
    const exception2 = TeosCliErrorException.new(serviceUnavailableError);
    expect(exception2.getStatus()).toBe(HttpStatus.SERVICE_UNAVAILABLE);

    const badRequestError = new TeosCliError('Locator, public key');
    const exception3 = TeosCliErrorException.new(badRequestError);
    expect(exception3.getStatus()).toBe(HttpStatus.BAD_REQUEST);

    const userNotFoundError = new TeosCliError('User not found');
    const exception4 = TeosCliErrorException.new(userNotFoundError);
    expect(exception4.getStatus()).toBe(HttpStatus.NOT_FOUND);
  });
});
