/* The line `import { Fa_To_En } from './../../parser/number/FaToEn';` is importing the `Fa_To_En`
function from the `FaToEn` module located in the `parser/number` directory. This function is likely
used to convert Persian (Farsi) numbers to English numbers. */
import { Fa_To_En } from './../../parser/number/FaToEn';

/* The line `import { banks } from '../../constants/cardNumber';` is importing the `banks` array from
the `cardNumber` module located in the `constants` directory. This array likely contains information
about different banks and their associated credit card number prefixes. */
import { banks } from '../../constants/cardNumber';

/* The line `import { CheckCardNumber } from './checkCardNumber';` is importing the `CheckCardNumber`
function from the `checkCardNumber` module. This function is likely used to validate whether a given
credit card number is valid or not. */
import { CheckCardNumber } from './checkCardNumber';

/**
 * Determines the bank associated with a given credit card number.
 * @param {string} CardNumber - The credit card number to check.
 * @returns {string | undefined | boolean} - The name of the bank associated with the card number, undefined if the card number is invalid, or false if the card number is not associated with any bank.
 */
export const CardBank = (CardNumber: string): string | undefined | boolean => {
  if (CheckCardNumber(Fa_To_En(CardNumber))) {
    CardNumber = CardNumber.slice(0, 6);
    const bankName = banks.find((item) => item.id === +CardNumber);
    return bankName?.name;
  }
  return false;
};
