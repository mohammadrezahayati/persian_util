import { numbers } from "../../constants/numberToWord";

/* 
 TODO : Find range of number and get the length of number variable
 TODO : check the length, if had 1 , 10 , 100
 TODO : split numbers third to one peace of number
 TODO : concat number sign mark to each separated number
 TODO : concat all strings together

*/
export const numberToDigit = (num: number): string => {
    const numToString = num.toString();
    const numLength = numToString.length;
    const billion = 'میلیارد'
    const million = 'میلیون'
    const thousand = 'هزار'
    const hundred = 'صد'
    const twoDigit = 'ده'
    const digitsArray = ['یک', 'دو', 'سه', 'چهار', 'پنج', 'شش', 'هفت', 'هشت', 'نه', 'ده']
    const digitsThArray = ['ده', 'بیست', 'سی', 'چهل', 'پنجاه', 'شصت', 'هفتاد', 'هشتاد', 'نود']
    const digitsThirdArray = ['دویست', 'سی', 'چهار', 'پان', 'شش', 'هفت', 'هشت', 'نه']
    if (num > Number.MAX_SAFE_INTEGER || num === 0)
        throw TypeError("out of range");
    if (num <= 10) {
        return numbers[num]
    }
    if (10 < num && num <= 100) {
        if (num === 100) {
            return numbers.hundred;
        }
        if (num < 20 && num > 10) {
            return `${numbers[(num % 10)]}${numbers.twoDigit}`
        }
        if (num % 10 === 0) {
            return numbers[num]
        }
        return `${numbers[+numToString[0]]} و ${numbers[+numToString[1]]}`
    }
    // if (100 < num && num <= 1000) {
    //     if (num === 1000) {
    //         return thousand;
    //     }
    //     if (num % 100 === 0) {
    //         if (num === 200) {
    //             return `${digitsThirdArray[(num / 100) - 2]}`;
    //         }
    //         return `${digitsThirdArray[(num / 100) - 2]}${hundred}`;
    //     }
    //     return `${digitsThirdArray[+numToString[0] - 2] + hundred + " و"} ${+numToString[1] !== 0 ? digitsThArray[+numToString[1] - 1] : +numToString[2] === 0 ? digitsThArray[+numToString[2] - 1] : ""}${+numToString[2] !== 0 ? digitsArray[+numToString[2] - 1] : ""}`
    // }
    // if (1000 < num && num <= 1000000) {
    //     if (num === 1000) {
    //         return thousand;
    //     }
    //     if (num % 1000 === 0) {
    //         return `${digitsArray[(num / 1000) - 1]}${thousand}`;
    //     }
    //     return `${digitsArray[+numToString[0] - 1]} ${thousand} و ${numToString[1] && digitsArray[+numToString[0] - 1]} ${digitsArray[+numToString[1] - 1]}`
    // }
    // if (1000000 < num && num <= 1000000000) { }
    // if (1000000000 < num && num <= 1000000000000) { }
    return ''
}
numberToDigit(
    88
)

