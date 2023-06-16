import { postalCodes } from '../../constants/postalCode';
import { Fa_To_En } from '../../parser/number/FaToEn';
import { PostalCodeFindType } from '../../types/postalCode/postalCodeFind';

/**
 * Finds the province and city of a given postal code.
 * @param {string} code - The postal code to search for.
 * @returns {PostalCodeFindType | undefined | boolean} - An object containing the province and city of the postal code, or undefined if the postal code is not found, or false if the input is invalid.
 */
export const PostalCodeFind = (
  code: string
): PostalCodeFindType | undefined | boolean => {
  code = Fa_To_En(code.slice(0, 5));
  if (code) {
    const postFiltered = postalCodes?.find(
      (item) => Fa_To_En(item.from) <= code && code <= Fa_To_En(item.to)
    );
    if (postFiltered) {
      return { province: postFiltered.province, city: postFiltered.city };
    }
  }
  return false;
};
