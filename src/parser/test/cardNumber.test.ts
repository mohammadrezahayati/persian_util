/**
 * This module imports the necessary functions and modules to run Jest tests.
 * @module Jest
 * @requires describe
 * @requires expect
 * @requires test
 */
import { describe, expect, test } from '@jest/globals';
/**
 * Imports the CardNumberParse class from the cardNumber module.
 * @module cardNumber
 * @class CardNumberParse
 */
import { CardNumberParse } from '../cardNumber/cardNumber';
/**
 * Test suite for the Card component.
 */
describe('Card', () => {
  /**
   * Tests the CardNumberParse function to ensure that it correctly parses a given card number string.
   * @returns None
   */
  test('Pase CardNumber', () => {
    /**
     * Takes in a string of card number and removes any dashes or spaces.
     * @param {string} cardNumber - the card number to parse
     * @returns {string} - the parsed card number without any dashes or spaces
     * @example
     * @returns '1111222233334444'
     * CardNumberParse('1111-2222-3333-4444')
     */
    expect(CardNumberParse('1111-2222-3333-4444')).toStrictEqual(
      '1111222233334444'
    );
    /**
     * Takes in a string of card number and removes any spaces to return a string of only digits.
     * @param {string} cardNumber - the card number to parse
     * @returns {string} - the parsed card number with no spaces
     */
    expect(CardNumberParse('1111 2222 3333 4444')).toStrictEqual(
      '1111222233334444'
    );
    /**
     * Parses a string of card number and returns a string of only digits.
     * @param {string} cardNumber - the card number string to parse
     * @returns {string} - a string of only digits
     * @example
     * @returns '1111222233334444'
     * CardNumberParse('۱۱۱۱.۲۲۲۲.۳۳۳۳.۴۴۴۴')
     */
    expect(CardNumberParse('۱۱۱۱.۲۲۲۲.۳۳۳۳.۴۴۴۴')).toStrictEqual(
      '1111222233334444'
    );
  });
});
