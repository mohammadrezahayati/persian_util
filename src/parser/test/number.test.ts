/**
 * This module imports the necessary functions and modules to run Jest tests.
 * @module Jest
 * @requires describe
 * @requires expect
 * @requires test
 */
import { describe, expect, test } from '@jest/globals';
/**
 * This module exports functions for converting numbers between different formats.
 * The following functions are available:
 * - Add_Commas: adds commas to a number to make it more readable.
 * - En_To_Fa: converts English digits to Persian digits.
 * - Fa_To_En: converts Persian digits to English digits.
 * - Remove_Commas: removes commas from a number.
 * - Rial_To_Toman: converts Iranian Rials to Tomans.
 * - Toman_To_Rial: converts Tomans to Iranian Rials.
 */
import {
  Add_Commas,
  En_To_Fa,
  Fa_To_En,
  Remove_Commas,
  Rial_To_Toman,
  Toman_To_Rial,
} from '../number';
/**
 * A test suite for various number parsing functions.
 * @returns None
 */
describe('Parse Number', () => {
  /**
   * Converts a given string of English numbers to Persian/Farsi numbers.
   * @param {string} str - The string of English numbers to convert.
   * @returns {string} The converted string of Persian/Farsi numbers.
   */
  test('Parse EN Number to FA', () => {
    expect(En_To_Fa('09123456789')).toBe('۰۹۱۲۳۴۵۶۷۸۹');
  });
  /**
   * Converts a Persian number string to an English number string.
   * @param {string} persianNumber - The Persian number string to convert.
   * @returns {string} The English number string.
   */
  test('Parse FA Number to EN', () => {
    expect(Fa_To_En('۰۹۱۲۳۴۵۶۷۸۹')).toBe('09123456789');
  });
  /**
   * Converts a Persian IP address to an English IP address.
   * @param {string} persianIP - The Persian IP address to convert.
   * @returns {string} The English IP address.
   */
  test('Parse FA IP to EN', () => {
    expect(Fa_To_En('۱۱۱.۱۱۱.۱۱۱.۱۱۱')).toBe('111.111.111.111');
  });
  /**
   * Test the Rial_To_Toman function by passing in a value in Rials and checking if the
   * returned value is correct in Tomans.
   * @param None
   * @returns None
   */
  test('Parse Rial to Toman', () => {
    expect(Rial_To_Toman(10564523)).toBe('1056452');
  });

  /**
   * Test function to check if the Toman_To_Rial function correctly converts Toman to Rial.
   * @param None
   * @returns None
   */
  test('Parse Toman to Rial', () => {
    expect(Toman_To_Rial(10564523)).toBe(105645230);
  });

  /**
   * Takes in a number as a string and adds commas to the number to make it more readable.
   * @param {string} num - the number to add commas to
   * @returns {string} - the number with commas added
   */
  test('Add Commas', () => {
    expect(Add_Commas('30001000')).toBe('30,001,000');
  });
  /**
   * Removes commas from a given string.
   * @param {string} str - The string to remove commas from.
   * @returns {string} The input string with commas removed.
   */
  test('Remove Commas', () => {
    expect(Remove_Commas('30,001,000')).toBe('30001000');
  });
});
