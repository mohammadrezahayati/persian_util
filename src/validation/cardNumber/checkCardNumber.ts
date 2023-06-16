import { banks } from '../../constants/cardNumber';

/**
 * Checks if a given credit card number is valid and returns a boolean value.
 * @param {string} CardNumber - the credit card number to check
 * @returns {boolean} - true if the credit card number is valid, false otherwise
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
