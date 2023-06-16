/**
 * Converts a Persian/Farsi number string to an English number string.
 * @param {string} number - The Persian/Farsi number string to convert.
 * @returns {string} - The English number string.
 */
export const Fa_To_En = (number: string): string =>
  number.replace(/[۰-۹]/g, (d: string) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString());
