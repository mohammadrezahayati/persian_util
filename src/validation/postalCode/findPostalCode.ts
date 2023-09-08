/* The line `import { postalCodes } from '../../constants/postalCode';` is importing the `postalCodes`
variable from the `postalCode` module in the `constants` directory. This variable likely contains an
array of postal code data, which is used in the `PostalCodeFind` function to search for a given
postal code and find its corresponding province and city. */
import { postalCodes } from '../../constants/postalCode';

/* The line `import { Fa_To_En } from '../../parser/number/FaToEn';` is importing the `Fa_To_En`
function from the `FaToEn` module in the `parser/number` directory. This function is likely used to
convert Persian (Farsi) numbers to English numbers. */
import { Fa_To_En } from '../../parser/number/FaToEn';

/* The line `import { PostalCodeFindType } from '../../types/postalCode/postalCodeFind';` is importing
the `PostalCodeFindType` type from the `postalCodeFind` module in the `types/postalCode` directory.
This type is likely used to define the structure of the return value of the `PostalCodeFind`
function. */
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
