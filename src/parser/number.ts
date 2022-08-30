
/**
 * This Function get a Persian number and change it to English @number and return it.
 * @param number @type @string
 * @returns string
 */
export const Fa_To_En = (number: string): string => number.replace(/[۰-۹]/g, (d: string) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString())

/**
 * This Function get a English number and change it to Persian @number and return it.
 * @param number @type @string
 * @returns string
 */
export const En_To_Fa = (number: string): string => number.replace(/\d/g, (d: string) => '۰۱۲۳۴۵۶۷۸۹'[+d])


/**
 * This Function get a number base on Rial and change it to Toman and return it.
 * @param number @type @number
 * @returns string
 */
export const Rial_To_Toman = (number: number): string => (number / 10).toFixed(0);

/**
 * This Function get a number base on Toman and change it to Rial and return it.
 * @param number @type @number
 * @returns string
 */
export const Toman_To_Rial = (number: number): number => number * 10 ;

/**
 * This Function get a string and split with commas.
 * @param number @type @number
 * @returns number
 */
export const Add_Commas = (number: string): string => number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");


/**
 * This Function get a string and remove all commas.
 * @param number @type @number
 * @returns number
 */
export const Remove_Commas = (number: string): string => number.replace(/,\s?/g, "");

