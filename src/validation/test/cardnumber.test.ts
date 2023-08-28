/* The line `import { describe, test, expect } from '@jest/globals';` is importing the `describe`,
`test`, and `expect` functions from the `@jest/globals` module. These functions are part of the Jest
testing framework and are used to define test suites, individual tests, and assertions respectively.
By importing these functions, the code can use them to write tests and make assertions within the
current module. */
import { describe, test, expect } from '@jest/globals';

/* The line `import { CardBank, CheckCardNumber, IBANChecker } from '../cardNumber';` is importing
three functions (`CardBank`, `CheckCardNumber`, and `IBANChecker`) from the `cardNumber` module.
These functions can then be used in the current module for testing purposes. */
import { CardBank, CheckCardNumber, IBANChecker } from '../cardNumber';

/* The line `import { CardNumberDeepCheck } from '../cardNumber/cardNumberDeepCheck';` is importing the
`CardNumberDeepCheck` function from the `cardNumberDeepCheck` module. This allows the
`CardNumberDeepCheck` function to be used in the current module for testing purposes. */
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
  /* The code is testing the `IBANChecker` function to ensure that it correctly identifies a failure
  for a given IBAN number. It expects the function to return `false` when the IBAN number provided
  is 'IR090560611828002222222222'. */
  test('IBAN Checker', () => {
    expect(IBANChecker('IR090560611828002222222222')).toBeFalsy();
  });
});
