import { postalCodes } from '../constants';
import { Fa_To_En } from './../parser/number';
/**
 * TODO: create function to check is valid or not
 * TODO: create function to check postal code from where?
 */

interface PostalCodeFindType {
    province: string;
    city: string
}

/**
 * get postalCode and check it if valid return province and city of postalCode
 * @param code 
 * @returns 
 */
export const PostalCodeFind = (code: string): PostalCodeFindType => {
    code = Fa_To_En(code.slice(0, 5));
    if (code) {
        const postFiltered = postalCodes?.filter(item => (Fa_To_En(item.from) <= code && code <= Fa_To_En(item.to)))
        if (postFiltered) {
            const res = postFiltered.map(item => {
                return { province: item.province, city: item.city }
            })
            return res[0];
        }
    }
    return { province: "", city: "" }
}