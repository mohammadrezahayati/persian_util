import { banks } from "../constants/cardNumber";

/**
 * get card number and check if is valid
 * @param CardNumber 
 * @returns boolean
 */
export const CheckCardNumber = (CardNumber: string): boolean => {
    const CardNumberRegex = /^\d{4}?[\s.-]?\d{4}?[\s.-]?\d{4}?[\s.-]?\d{4}$/g;
    if (CardNumberRegex.test(CardNumber)) {
        CardNumber = CardNumber.replace(/[\s.-]/g, "")
        CardNumber = CardNumber.slice(0, 6);
        const bankName = banks.find((item) => item.id === +CardNumber);
        if (bankName) return true
    }
    return false;
}

/**
 * get card number and check if is valid
 * @param CardNumber 
 * @returns boolean
 */
export const CardBank = (CardNumber: string): string | undefined => {
    if (CheckCardNumber(CardNumber)) {
        CardNumber = CardNumber.slice(0, 6);
        const bankName = banks.find((item) => item.id === +CardNumber);
        return bankName?.name
    }
    return;
}