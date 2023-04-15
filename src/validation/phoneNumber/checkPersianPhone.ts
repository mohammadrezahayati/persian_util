import { Fa_To_En } from "../../parser/number/FaToEn";


/**
 * This function get a persian @number and check it if valid or not and return @boolean
 * @param number 
 * @returns boolean
 */
export const CheckPersianPhone = (number: string): boolean => {
    const numberRegex = /^(\+98|0098|98|0)?9\d{9}$/,
        parseFaToEn = Fa_To_En(number);
    return numberRegex.test(parseFaToEn);
}