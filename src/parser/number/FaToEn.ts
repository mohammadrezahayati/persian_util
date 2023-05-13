
/**
 * This Function get a Persian number and change it to English @number and return it.
 * @param number @type @string
 * @returns string
 */
export const Fa_To_En = (number: string): string => number.replace(/[۰-۹]/g, (d: string) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString());
