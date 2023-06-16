import { describe, expect, test } from '@jest/globals';
import { Err } from '../error';
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
      CardBank('5022291045674567'),
      'پاسارگاد',
      EvalError(),
      'some asdasdasdasdasd'
    );
    /**
     * Gets the error value from an error object and checks if it is true.
     * @param {Error} error - The error object to check.
     * @returns {boolean} - True if the error value is true, false otherwise.
     */
    expect(error.getError()).toBe(true);
    /**
     * Creates a new error object with the given parameters.
     * @param {CardBank} cardBank - The card bank object associated with the error.
     * @param {boolean} isError - A boolean indicating whether the error is an actual error or just a warning.
     * @param {ReferenceError} referenceError - The reference error object associated with the error.
     * @param {string} message - The error message.
     * @returns A new error object.
     */
    const error1 = new Err(
      CardBank('502229104566678'),
      false,
      ReferenceError(),
      'some message'
    );
    /**
     * Expects the `getError()` method of an error object to return `true`.
     * @param {Error} error1 - The error object to test.
     * @returns None
     */
    expect(error1.getError()).toBe(true);
  });
});
