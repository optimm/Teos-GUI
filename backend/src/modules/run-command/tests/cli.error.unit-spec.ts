import { TeosCliError } from '../error/cli.error';

describe('TeosCliError', () => {
  it('check: should create an instance of TeosCliError with default message', () => {
    const error = new TeosCliError();
    expect(error).toBeInstanceOf(TeosCliError);
    expect(error.message).toBe(
      'Something went wrong while running cli command',
    );
    expect(error.name).toBe('TeosCliError');
  });

  it('check: should create an instance of TeosCliError with custom message', () => {
    const errorMessage = 'Custom error message';
    const error = new TeosCliError(errorMessage);
    expect(error).toBeInstanceOf(TeosCliError);
    expect(error.message).toBe(errorMessage);
    expect(error.name).toBe('TeosCliError');
  });

  it('check: should return default error message for invalid input', () => {
    const invalidError = 12345;
    const message = TeosCliError.getMessage(invalidError);
    expect(message).toBe('Something went wrong while running cli command');
  });
});
