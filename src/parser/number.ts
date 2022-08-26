
/**
 * This Function get a Persian @number and change it to English @number and return it.
 * @param number @type @string
 * @returns string
 */
export const Fa_To_En =(number : string) : string =>{
    const res =  number.replace(/[۰-۹]/g, (d: string) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString())
    return res;
}

/**
 * This Function get a English @number and change it to Persian @number and return it.
 * @param number @type @string
 * @returns string
 */
export const En_To_Fa =(number : string) : string =>{
    // const res =  number?.replace(/\d/g,((d:number) => '۰۱۲۳۴۵۶۷۸۹'[d]).toString())
    const res =  number.replace(/\d/g, (d:string) => '۰۱۲۳۴۵۶۷۸۹'[+d])
    return res;
}