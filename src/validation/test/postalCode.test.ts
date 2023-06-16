import { describe, test, expect } from '@jest/globals';
import { PostalCodeFind } from '../postalCode/findPostalCode';

/**
 * Tests the PostalCodeFind function to ensure that it returns the correct province and city
 * for a given postal code.
 * @returns None
 */
describe('Card', () => {
  /**
   * Tests the PostalCodeFind function to ensure that it returns the correct province and city
   * for a given postal code.
   * @returns None
   */
  test('Card is Valid', () => {
    /**
     * Tests the PostalCodeFind function to ensure that it correctly returns the expected province and city
     * for the given postal code.
     * @param {string} postalCode - The postal code to test.
     * @returns None
     */
    expect(PostalCodeFind('۵۹۴۳۲')).toMatchObject({
      province: 'آذربایجان غربی',
      city: 'بوکان',
    });
    /**
     * Tests the PostalCodeFind function to ensure that it returns the expected province and city
     * for the given postal code.
     * @param {string} postalCode - The postal code to test.
     * @returns None
     */
    expect(PostalCodeFind('63511')).toMatchObject({
      province: 'خوزستان',
      city: 'ماهشهر',
    });
  });
});
