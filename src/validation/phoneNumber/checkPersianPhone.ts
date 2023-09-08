/* The line `import { Fa_To_En } from '../../parser/number/FaToEn';` is importing the `Fa_To_En`
function from the file located at `'../../parser/number/FaToEn'`. This function is likely
responsible for converting Persian numbers to English numbers. */
import { Fa_To_En } from '../../parser/number/FaToEn';

/**
 * Checks if the given phone number is a valid Persian phone number.
 * @param {string} number - The phone number to check.
 * @returns {boolean} - True if the phone number is valid, false otherwise.
 */
export const CheckPersianPhone = (number: string): boolean => {
  const numberRegex = /^(\+98|0098|98|0)?9\d{9}$/,
    parseFaToEn = Fa_To_En(number);
  return numberRegex.test(parseFaToEn);
};
