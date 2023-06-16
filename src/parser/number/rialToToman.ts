/**
 * Converts a given number from Rial to Toman.
 * @param {number} number - The number to convert from Rial to Toman.
 * @returns {string} - The converted number in Toman.
 */
export const Rial_To_Toman = (number: number): string =>
  (number / 10).toFixed(0);
