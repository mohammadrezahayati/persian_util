import { Fa_To_En } from "@Parser";

/**
 * take number and check it if from Rightel Operator or not
 * @param number 
 * @returns boolean
 */
export const isRightel = (number: string): boolean => {
    const numberRegex = /^(\+98|0098|98|0)?(920|921|922|923)\d{7}$/,
        parseFaToEn = Fa_To_En(number);
    return numberRegex.test(parseFaToEn);
}