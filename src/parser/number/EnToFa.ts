/**
 * This Function get a English number and change it to Persian @number and return it.
 * @param number type string
 * @returns string
 */
export const En_To_Fa = (number: string): string =>
  number.replace(/\d/g, (d: string) => '۰۱۲۳۴۵۶۷۸۹'[+d]);
