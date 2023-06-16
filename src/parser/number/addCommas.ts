/**
 * This Function get a string and split with commas.
 * @param number @type @number
 * @returns number
 */
export const Add_Commas = (number: string): string =>
  number.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
