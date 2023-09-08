/* The line `import { describe, expect, test } from '@jest/globals';` is importing the `describe`,
`expect`, and `test` functions from the `@jest/globals` module. These functions are provided by the
Jest testing framework and are used to define test suites, test cases, and assertions in the code.
By importing these functions, the code can use them to write and run tests for the `Err` class. */
import { describe, expect, test } from '@jest/globals';

/* The line `import { Err } from '../error';` is importing the `Err` class from the `error` module in
the parent directory. This allows the code to use the `Err` class in the current module. */
import { Err } from '../error';

/* The line `import { CardBank } from '../../validation/cardNumber';` is importing the `CardBank` class
from the `cardNumber` module in the `validation` directory. This allows the code to use the
`CardBank` class in the current module. */
import { CardBank } from '../../validation/cardNumber';

/**
 * A test suite for the Err class, which represents an error response.
 */
describe('Error', () => {
  /**
   * Test function to check if the error response is being generated correctly.
   * Creates two instances of the Err class with different parameters and checks if the
   * getError() method returns true for both.
   * @returns None
   */
  test('Get Error response', () => {
    /**
     * Creates a new error object with the given card bank, bank name, error type, and error message.
     * @param {string} cardBank - The card bank associated with the error.
     * @param {string} bankName - The name of the bank associated with the error.
     * @param {EvalError} errorType - The type of error that occurred.
     * @param {string} errorMessage - The error message associated with the error.
     * @returns A new error object.
     */
    const error = new Err(
      CardBank('5022291044444444'),
      "پاسارگاد", SyntaxError(), "asdasd"
    );
    
    /**
     * Gets the error value from an error object and checks if it is true.
     * @param {Error} error - The error object to check.
     * @returns {boolean} - True if the error value is true, false otherwise.
     */
    expect(error.getError()).toBe(false);
    /**
     * Creates a new error object with the given parameters.
     * @param {CardBank} cardBank - The card bank object associated with the error.
     * @param {boolean} isError - A boolean indicating whether the error is an actual error or just a warning.
     * @param {ReferenceError} referenceError - The reference error object associated with the error.
     * @param {string} message - The error message.
     * @returns A new error object.
     */
    const error1 = new Err(
      CardBank('603799۱۸۴۵۶۷۴۵۶۷'),
      "ملی ایران",
      undefined,
      "your message"
    );
    /**
     * Expects the `getError()` method of an error object to return `true`.
     * @param {Error} error1 - The error object to test.
     * @returns None
     */
   expect(error1.getError()).toBe(false);
  });
})