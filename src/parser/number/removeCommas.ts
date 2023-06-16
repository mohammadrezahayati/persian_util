/**
 * Removes commas from a given string of numbers.
 * @param {string} number - The string of numbers to remove commas from.
 * @returns {string} - The string of numbers without commas.
 */
export const Remove_Commas = (number: string): string =>
  number.replace(/,\s?/g, '');
