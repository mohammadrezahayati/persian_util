import { numbers } from "../../constants/numberToWord"
import { Add_Commas } from "./addCommas"

/**
 * The `digitsChecker` function takes a string or number input, splits it into groups of digits, and
 * formats it in Arabic style with thousand, million, and billion separators.
 * @param {string | number} digits - The `digitsChecker` function seems to be converting a number into
 * a formatted string representation with Arabic words for thousand, million, and billion.
 * @returns The `digitsChecker` function is returning a formatted string based on the input digits. If
 * the input has 2 parts, it returns the formatted string with "thousand" separator. If the input has 3
 * parts, it returns the formatted string with "million" and "thousand" separators. If the input has 4
 * or more parts, it returns the formatted string with "billion
 */
export const digitsChecker = (digits: string | number): string | undefined => {
    const digitsSplit = Add_Commas(digits.toString()).split(",")
    const resultDigits = digitCheckerHelper(digitsSplit)
    return resultDigits.join(" ")
}

/**
 * The function `digitCheckerHelper` takes an array of digits as input and converts them into their
 * corresponding words in Arabic.
 * @param {string[]} digits - It seems like the code snippet you provided is a TypeScript function that
 * processes an array of digits and converts them into words based on certain conditions. However, the
 * `numbers` array or object that contains the mapping of digits to words is not defined in the
 * snippet.
 * @returns The `digitCheckerHelper` function returns an array of strings that represent the words
 * corresponding to the digits passed as input.
 */
const digitCheckerHelper = (digits: string[]): string[] => {
    const word: string[] = [];
    let digitLength = digits.length;
    for (let i = 0; i < digits.length; i++) {
        const digitToNumber = +digits[i]
        if (digitToNumber < 10 && digitToNumber > 0) {
            word.push(`${numbers[digitToNumber]}`)
        }
        else if (digitToNumber < 20 && digitToNumber >= 10) {
            word.push(`${numbers[digitToNumber]}`)
        }
        else if (digitToNumber > 20 && digitToNumber <= 100) {
            const graterVal = +digitToNumber.toString()[0] * 10
            const smallerVal = digitToNumber - graterVal
            if (digitToNumber === 0) {
                word.push(`${numbers[graterVal]}`)
            }
            else if (digitToNumber % 10 === 0) {
                word.push(`${numbers[digitToNumber]}`)
            }
            else {
                word.push(`${numbers[graterVal]} و ${numbers[smallerVal]}`)
            }

        }
        else if (100 < digitToNumber && digitToNumber < 1000) {
            const graterVal = +digitToNumber.toString()[0] * 100
            const smallerVal = digitToNumber - graterVal
            let combineRes = ''
            if (smallerVal <= 10 && smallerVal > 0) {
                word.push(`${numbers[graterVal]} و ${numbers[smallerVal]}`)
            }
            else if (smallerVal < 20 && smallerVal > 10) {
                word.push(`${numbers[graterVal]} و ${numbers[smallerVal]}`)
            }
            else if (smallerVal > 20 && smallerVal < 100) {
                const graterBreakVal = +digitToNumber.toString()[1] * 10
                const calculateAverage = +digitToNumber.toString()[2];
                combineRes = combineRes.concat(`${numbers[graterBreakVal]} ${calculateAverage !== 0 ? " و " + numbers[calculateAverage] : ""}`)
                word.push(`${numbers[graterVal]} و ${combineRes}`)
            }
            else {
                const calculateAverage = +digitToNumber.toString().slice(1);
                word.push(`${numbers[graterVal]} ${calculateAverage !== 0 ? " و " + numbers[calculateAverage] : ""}`)
            }
        }

        if (digitLength === 2 && digitToNumber !== 0) {
            word.push(numbers.thousand)
            if (digitLength && digitToNumber !== 0) {
                word.push(" و ")
            }

        }
        if (digitLength === 3 && digitToNumber !== 0) {
            word.push(numbers.million)
            if (digitLength && digitToNumber !== 0) {
                console.log(digitLength)
                word.push(" و ")
            }

        }
        if (digitLength >= 4) {
            word.push(numbers.billion)
            if (digitLength && digitToNumber !== 0) {
                word.push(" و ")
            }
        }
        digitLength--
    }
    return word
}