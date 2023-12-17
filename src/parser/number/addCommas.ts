/**
 * Adds commas to a given number string to make it more readable.
 * @param {string} number - the number string to add commas to.
 * @returns {string} - the number string with commas added.
 */
export const Add_Commas = (number: string): string =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
