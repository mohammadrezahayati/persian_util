/* The line `import { describe, expect, test } from '@jest/globals';` is importing the `describe`,
`expect`, and `test` functions from the `@jest/globals` module. These functions are part of the Jest
testing framework and are used to define and run test cases. */
import { describe, expect, test } from '@jest/globals';

/* The line `import { CheckIdNumber, IdNumberFind } from '../idNumber';` is importing the
`CheckIdNumber` and `IdNumberFind` functions from the `idNumber` module. These functions are then
used in the test cases to test their functionality. */
import { CheckIdNumber, IdNumberFind } from '../idNumber';

/**
 * A test suite for the Card component.
 */
describe('Card', () => {
  /**
   * Test function for the IdNumberFind function.
   * Tests if the function returns the correct province and city for a given Id Number.
   * @returns None
   */
  test('Id Number city', () => {
    expect(IdNumberFind('194')).toMatchObject({
      province: 'خوزستان',
      city: 'بندرماهشهر',
    });
  });
  /**
   * Tests the CheckIdNumber function to ensure that it correctly identifies valid ID numbers.
   * @returns None
   */
  test('Id Number is valid', () => {
    /**
     * Checks if the given string is a valid Iranian national ID number.
     * @param {string} idNumber - The ID number to check.
     * @returns {boolean} - True if the ID number is valid, false otherwise.
     * @example
     * expect(CheckIdNumber('۱۲۳۴۵۶۷۸۹0')).toBeFalsy();
     */
    expect(CheckIdNumber('۱۲۳۴۵۶۷۸۹0')).toBeFalsy();
    /**
     * Checks if the given ID number is valid.
     * @param {string} idNumber - The ID number to check.
     * @returns {boolean} - True if the ID number is valid, false otherwise.
     * @example
     * expect(CheckIdNumber('123۴۶۷۱۲11')).toBeFalsy();
     */
    expect(CheckIdNumber('123۴۶۷۱۲11')).toBeFalsy();
    /**
     * Tests whether a given ID number is valid or not.
     * @param {string} idNumber - The ID number to be checked.
     * @returns {boolean} - Returns true if the ID number is valid, false otherwise.
     */
    expect(CheckIdNumber('0054725112')).toBeFalsy();
  });
});
