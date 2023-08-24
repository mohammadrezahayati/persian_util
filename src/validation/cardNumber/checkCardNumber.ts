/* The line `import { Fa_To_En } from './../../parser/number/FaToEn';` is importing the `Fa_To_En`
function from the `FaToEn` module located in the `parser/number` directory. This function is likely
responsible for converting Persian (Farsi) numbers to English numbers. */
import { Fa_To_En } from './../../parser/number/FaToEn';
/* The line `import { banks } from '../../constants/cardNumber';` is importing the `banks` variable
from the `cardNumber` module located in the `constants` directory. This variable likely contains an
array of objects representing different banks and their corresponding identification numbers. */
import { banks } from '../../constants/cardNumber';

/**
 * Checks if a given credit card number is valid and returns a boolean value.
 * @param {string} CardNumber - the credit card number to check
 * @returns {boolean} - true if the credit card number is valid, false otherwise
 */
export const CheckCardNumber = (CardNumber: string): boolean => {
  const CardNumberRegex = /^\d{4}?[\s.-]?\d{4}?[\s.-]?\d{4}?[\s.-]?\d{4}$/g;
  if (CardNumberRegex.test(Fa_To_En(CardNumber))) {
    CardNumber = CardNumber.replace(/[\s.-]/g, '');
    CardNumber = CardNumber.slice(0, 6);
    const bankName = banks.find((item) => item.id === +CardNumber);
    if (bankName) return true;
  }
  return false;
};
