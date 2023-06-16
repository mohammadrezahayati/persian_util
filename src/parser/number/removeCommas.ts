/**
 * This Function get a string and remove all commas.
 * @param number @type @number
 * @returns number
 */
export const Remove_Commas = (number: string): string =>
  number.replace(/,\s?/g, '');
