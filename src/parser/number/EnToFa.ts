/**
 * Converts a given string of numbers from English to Persian (Farsi) numerals.
 * @param {string} number - the string of numbers to convert
 * @returns {string} - the converted string of numbers in Persian (Farsi) numerals
 */
export const En_To_Fa = (number: string): string =>
  number.replace(/\d/g, (d: string) => '۰۱۲۳۴۵۶۷۸۹'[+d]);
