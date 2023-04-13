import { LetterCountType } from "../../types/string/letterCount";


/**
 * This function get an sentence and count all duplicated letter 
 * @param Sentence 
 */
export const letterCount = (letter: string) => {
    const letterFix = letter.match(/(\w)/g) ?? "";
    const words: LetterCountType = {};
    for (let i = 0; i < letterFix.length; i++) {
        const word = letterFix[i];
        if (!words[word]) {
            words[word] = 1;
        } else {
            words[word]++;
        }
    }
    return words;
}