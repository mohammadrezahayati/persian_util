
/**
 * The IBANChecker function checks if a given Sheba number (Iranian bank account number) is valid or
 * not.
 * @param {string} sheba - The `sheba` parameter is a string representing an Iranian bank account
 * number in the International Bank Account Number (IBAN) format.
 * @returns a boolean value. It returns `true` if the remainder of `concat % BigInt(97)` is equal to
 * `BigInt(10)`, and `false` otherwise.
 */
export const IBANChecker = (sheba: string) => {
    const firstChar = sheba.replace("IR", "1827").slice(0, 7);
    const concat = BigInt(sheba.slice(5,).concat(firstChar)) 
    console.log(concat % BigInt(97))
    return concat % BigInt(97) === BigInt(10) ? true : false
}