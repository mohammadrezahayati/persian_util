/**
 * Imports the Fa_To_En module from the '../number' file.
 * @returns The Fa_To_En module.
 */
import { Fa_To_En } from '../number';

/**
 * Parses a card number string by converting any Persian (Farsi) digits to English digits
 * and removing any spaces, dots, or dashes.
 * @param {string} cardNumber - the card number string to parse
 * @returns {string} - the parsed card number string
 */
export const CardNumberParse = (cardNumber: string): string =>
  Fa_To_En(cardNumber).replace(/[\s.-]/g, '');
