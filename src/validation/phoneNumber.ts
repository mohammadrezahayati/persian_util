import {Fa_To_En} from "../parser";


/**
 * This function get a persian @number and check it if valid or not and return @boolean
 * @param number 
 * @returns boolean
 */
export const CheckPersianPhone =(number:string): boolean =>{
    const numberRegex = /^(\+98|0098|98|0)?9\d{9}$/,
    parseFaToEn = Fa_To_En(number);
    return numberRegex.test(parseFaToEn);
}


/**
 * take number and check it if from MCI Hamrah Aval Operator or not
 * @param number 
 * @returns boolean
 */
export const isMCI =(number:string): boolean =>{
    const numberRegex = /^(\+98|0098|98|0)?(990|991|992|993|994|995|996|910|911|912|913|914|915|916|917|918|919)\d{7}$/,
    parseFaToEn = Fa_To_En(number);
    return numberRegex.test(parseFaToEn);
}
/**
 * take number and check it if from MTN Irancell Operator or not
 * @param number 
 * @returns boolean
 */
export const isMTN =(number:string): boolean =>{
    const numberRegex = /^(\+98|0098|98|0)?(930|933|935|936|937|938|900|901|902|903|904|905|941)\d{7}$/,
    parseFaToEn = Fa_To_En(number);
    return numberRegex.test(parseFaToEn);
}
/**
 * take number and check it if from Rightel Operator or not
 * @param number 
 * @returns boolean
 */
export const isRightel =(number:string): boolean =>{
    const numberRegex = /^(\+98|0098|98|0)?(920|921|922|923)\d{7}$/,
    parseFaToEn = Fa_To_En(number);
    return numberRegex.test(parseFaToEn);
}