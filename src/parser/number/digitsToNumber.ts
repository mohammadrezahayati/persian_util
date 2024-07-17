// TODO: create function to change Number to Digits of String

import { Add_Commas } from "./addCommas"

export const digitsChecker = (digits: string | number): string => {
    const digitsSplit = Add_Commas(digits.toString()).split(",")
    // thousand
    if (digitsSplit.length === 2){
        console.log("thousand")
    }
    // million
    if (digitsSplit.length === 3){
        console.log("million")
    }
    // billion
    if (digitsSplit.length >= 4){
        console.log("billion")
    }
    console.log(digitsSplit.length)
    // for (let i = 0; i < digits.length; i++) {
    //     const element = digits[i];

    // }
    return ""
}


digitsChecker(45421835)