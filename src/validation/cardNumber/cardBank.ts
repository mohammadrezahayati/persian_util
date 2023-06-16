import { Fa_To_En } from './../../parser/number/FaToEn';
import { banks } from '../../constants/cardNumber';
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
