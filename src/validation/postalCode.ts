import { postalCodes } from '../constants';
import { PostalCodeFindType } from '../types';
import { Fa_To_En } from './../parser/number';
/**
 * TODO: create function to check is valid or not
 * TODO: create function to check postal code from where?
 */

/**
 * get postalCode and check it if valid return province and city of postalCode
 * @param code 
 * @returns 
 */
export const PostalCodeFind = (code: string): PostalCodeFindType | undefined => {
    code = Fa_To_En(code.slice(0, 5));
    if (code) {
        const postFiltered = postalCodes?.find(item => (Fa_To_En(item.from) <= code && code <= Fa_To_En(item.to)))
        if (postFiltered) {
            return { province: postFiltered.province, city: postFiltered.city };
        }
    }
    return;
}

