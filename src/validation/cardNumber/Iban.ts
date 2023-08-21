/**
 * The IBANChecker function checks if a given IBAN (Sheba) number is valid.
 * @param {string} sheba - The `sheba` parameter is a string representing the Iranian bank account
 * number in the International Bank Account Number (IBAN) format.
 */
export const IBANChecker = (sheba: string) => BigInt(sheba.slice(5,).concat(sheba.replace("IR", "1827").slice(0, 7))) % BigInt(97) === BigInt(10) ? true : false