import { describe, expect, test } from '@jest/globals';
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
