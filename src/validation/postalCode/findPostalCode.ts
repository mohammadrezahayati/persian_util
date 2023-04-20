import { postalCodes } from "../../constants/postalCode";
import { Fa_To_En } from "../../parser/number/FaToEn";
import { PostalCodeFindType } from "../../types/postalCode/postalCodeFind";

/**
 * get postalCode and check it if valid return province and city of postalCode
 * @param code string
 * @returns 
 */
export const PostalCodeFind = (code: string): PostalCodeFindType | undefined | boolean => {
    code = Fa_To_En(code.slice(0, 5));
    if (code) {
        const postFiltered = postalCodes?.find(item => (Fa_To_En(item.from) <= code && code <= Fa_To_En(item.to)));
        if (postFiltered) {
            return { province: postFiltered.province, city: postFiltered.city };
        }
    }
    return false;
}
