import { banks } from "../constants/cardNumber";

/**
 * get card number and check if is valid
 * @param CardNumber 
 * @returns boolean
 */
export const CheckCardNumber = (CardNumber: string): boolean => {
    const CardNumberRegex = /^\d{4}?[\s.-]?\d{4}?[\s.-]?\d{4}?[\s.-]?\d{4}$/g;
    return CardNumberRegex.test(CardNumber)
}

/**
 * get card number and check if is valid
 * @param CardNumber 
 * @returns boolean
 */
export const CardBank = (CardNumber: string): string | undefined => {
    if (CheckCardNumber(CardNumber)) {
        const card = CardNumber.slice(0, 6),
            bankName = banks.find((item) => item.id === +card);
        return bankName?.name
    }
}