export class TeosCliError extends Error {
  constructor(message?: string) {
    super(message || 'Something went wrong while running cli command');
    this.name = 'TeosCliError';
  }

  public static getMessage(error: any): string {
    let errorMessage = '';

    if (typeof error === 'string') {
      errorMessage = error;
    } else if (typeof error === 'object' && error.message) {
      errorMessage = error.message;
    } else {
      errorMessage = 'Something went wrong while running cli command';
    }

    return this.refactorErrorMessage(errorMessage);
  }

  private static refactorErrorMessage(errorMessage: string): string {
    if (errorMessage.includes('Error: ')) {
      errorMessage = errorMessage.replace('Error: ', '');
    }
    return errorMessage;
  }
}
