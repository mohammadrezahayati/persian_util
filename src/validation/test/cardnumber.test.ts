import { describe, test, expect } from '@jest/globals';
import { CardBank, CheckCardNumber } from '../cardNumber';
import { CardNumberDeepCheck } from '../cardNumber/cardNumberDeepCheck';

/**
 * A test suite for the Card component.
 */
describe('Card', () => {
  /**
   * Tests the CheckCardNumber function to ensure that it correctly identifies valid card numbers.
   * @returns None
   */
  test('Card is Valid', () => {
    /**
     * Checks if a given credit card number is valid using the Luhn algorithm.
     * @param {string} cardNumber - The credit card number to check.
     * @returns {boolean} - True if the card number is valid, false otherwise.
     * @example
     * expect(CheckCardNumber('6037 9918 3333 4444')).toBeTruthy();
     */
    expect(CheckCardNumber('6037 9918 3333 4444')).toBeTruthy();
    /**
     * Checks if a given credit card number is valid using the Luhn algorithm.
     * @param {string} cardNumber - The credit card number to check.
     * @returns {boolean} - True if the card number is valid, false otherwise.
     */
    expect(CheckCardNumber('5859831133334444')).toBeTruthy();
    /**
     * Checks if a given credit card number is valid using the Luhn algorithm.
     * @param {string} cardNumber - The credit card number to check.
     * @returns {boolean} - True if the card number is valid, false otherwise.
     * @example
     * expect(CheckCardNumber('5022-2910-3333-4444')).toBeTruthy();
     */
    expect(CheckCardNumber('5022-2910-3333-4444')).toBeTruthy();
  });
  /**
   * Test the CardBank function to ensure it correctly identifies the bank name of a given card number.
   * @param None
   * @returns None
   * @throws {Error} If the function does not return the expected bank name.
   */
  test('Bank Card name', () => {
    /**
     * Tests the CardBank function to ensure that it correctly identifies the bank associated with a given credit card number.
     * @param {string} cardNumber - The credit card number to test.
     * @returns None
     * @throws {Error} If the CardBank function does not return the expected result.
     */
    expect(CardBank('5022293345678976')).toStrictEqual('پاسارگاد');
  });
  /* The code is testing the `CardNumberDeepCheck` function to ensure that it correctly identifies a
  deep check failure for a given card number. It expects the function to return `false` when the
  card number is provided in a non-numeric format (using Persian digits). */
  test('Bank Card Deep Check', () => {
    expect(CardNumberDeepCheck('5012121212121212')).toBeFalsy();
  });
});
