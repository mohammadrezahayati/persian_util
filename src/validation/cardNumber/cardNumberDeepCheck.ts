import { Fa_To_En } from './../../parser/number/FaToEn';

/**
 * The function `CardNumberDeepCheck` checks if a given card number is valid using the Luhn algorithm.
 * @param {string} CardNumber - The `CardNumber` parameter is a string representing a credit card
 * number.
 * @returns a boolean value. It returns true if the CardNumber passes the deep check algorithm, and
 * false otherwise.
 */
export const CardNumberDeepCheck = (CardNumber: string): boolean => {
    const numbers: string[] = Fa_To_En(CardNumber).split('');
    const oddNumberKey = Object.keys(numbers).filter(item => +item % 2 !== 0)
    const evenNumberKey = Object.keys(numbers).filter(item => +item % 2 === 0)
    const oddNumberValue = oddNumberKey.map((item, index) => numbers[+oddNumberKey[index]]);
    const evenNumberValue = evenNumberKey.map((item, index) => numbers[+evenNumberKey[index]]);
    const multiple = [...evenNumberValue.map((element) => +element * 2 > 9 ? (+element * 2) - 9 : +element * 2), ...oddNumberValue.map((element) => +element * 1)].reduce((accumulator, currentValue) => accumulator + currentValue)
    return multiple % 10 === 0 ? true : false;
}
