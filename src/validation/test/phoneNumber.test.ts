import { isMCI, isMTN, isRightel } from '../phoneNumber';
import { describe, expect, test } from '@jest/globals';

/**
 * A test suite to check if the given phone numbers belong to the correct operator.
 * @returns None
 */
describe('Operator Check', () => {
  /**
   * Tests whether a given phone number is an MCI number.
   * @param {string} phoneNumber - The phone number to test.
   * @returns {boolean} - True if the phone number is an MCI number, false otherwise.
   */
  test('MCI', () => {
    expect(isMCI('989113456787')).toBe(true);
  });
  /**
   * Test function to check if a given phone number is an MTN number.
   * @param {string} phoneNumber - The phone number to check.
   * @returns {boolean} - Returns true if the phone number is an MTN number, false otherwise.
   */
  test('MTN', () => {
    expect(isMTN('+989333456787')).toBe(true);
  });
  /**
   * Tests whether a given phone number is an MCI number.
   * @param {string} phoneNumber - The phone number to test.
   * @returns {boolean} - True if the phone number is an MCI number, false otherwise.
   */
  test('MCI', () => {
    expect(isMCI('00989163456787')).toBe(true);
  });
  /**
   * Tests whether a given phone number is a valid Rightel number.
   * @param {string} phoneNumber - The phone number to test.
   * @returns {boolean} - True if the phone number is a valid Rightel number, false otherwise.
   */
  test('Rightel', () => {
    expect(isRightel('09213456787')).toBe(true);
  });
});
