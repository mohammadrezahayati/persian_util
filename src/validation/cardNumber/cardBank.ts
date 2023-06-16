import { banks } from '../../constants/cardNumber';
import { CheckCardNumber } from './checkCardNumber';

/**
 * get card number and check if is valid
 * @param CardNumber
 * @returns boolean
 */
export const CardBank = (CardNumber: string): string | undefined | boolean => {
  if (CheckCardNumber(CardNumber)) {
    CardNumber = CardNumber.slice(0, 6);
    const bankName = banks.find((item) => item.id === +CardNumber);
    return bankName?.name;
  }
  return false;
};
