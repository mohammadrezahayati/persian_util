import { banks } from '../../constants/cardNumber';

/**
 * get card number and check if is valid or not
 * @param CardNumber
 * @returns boolean
 */
export const CheckCardNumber = (CardNumber: string): boolean => {
  const CardNumberRegex = /^\d{4}?[\s.-]?\d{4}?[\s.-]?\d{4}?[\s.-]?\d{4}$/g;
  if (CardNumberRegex.test(CardNumber)) {
    CardNumber = CardNumber.replace(/[\s.-]/g, '');
    CardNumber = CardNumber.slice(0, 6);
    const bankName = banks.find((item) => item.id === +CardNumber);
    if (bankName) return true;
  }
  return false;
};
