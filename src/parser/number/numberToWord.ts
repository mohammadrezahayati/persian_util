import { numbers } from "../../constants/numberToWord";
import { digitsChecker } from "./digitsToNumber";

/**
 * The function `numberToWord` converts a given number into its word representation in Arabic.
 * @param {number} num - The `num` parameter in the `numberToWord` function is the number that you want
 * to convert into words.
 * @returns The `numberToWord` function returns a string representation of a given number in Arabic
 * words. The function handles numbers up to 100 and calls the `digitsChecker` function for numbers
 * greater than 100.
 */
export const numberToWord = (num: number): string | undefined => {
    const numToString = num.toString();
    if (num > Number.MAX_SAFE_INTEGER || num === 0 || isNaN(num))
        throw TypeError("out of range");
    if (num <= 10) {
        return numbers[num]
    }
    if (10 < num && num <= 100) {
        if (num === 100) {
            return numbers.hundred;
        }
        if (num < 20 && num > 10) {
            return `${numbers[+num.toString()[0] * 10]}`
        }
        if (num % 10 === 0) {
            return numbers[num]
        }
        return `${numbers[+numToString[0]]} و ${numbers[+numToString[1]]}`
    }
    return digitsChecker(num)
}