
/**
 * The IBANChecker function checks if a given Sheba number (Iranian bank account number) is valid or
 * not.
 * @param {string} sheba - The `sheba` parameter is a string representing an Iranian bank account
 * number in the International Bank Account Number (IBAN) format.
 * @returns a boolean value. It returns `true` if the remainder of `concat % BigInt(97)` is equal to
 * `BigInt(10)`, and `false` otherwise.
 */
export const IBANChecker = (sheba: string) => BigInt(sheba.slice(5,).concat(sheba.replace("IR", "1827").slice(0, 7))) % BigInt(97) === BigInt(10) ? true : false


console.log(IBANChecker("IR550700001000119603807001"))
console.log(IBANChecker("IR270600300870014508972001"))
console.log(IBANChecker("IR560170000000345887268001"))