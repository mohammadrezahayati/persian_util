import { WordCountType } from "@Types";

/**
 * This function get an sentence and count all duplicated words 
 * @param Sentence 
 */
export const WordCount = (sentence: string) => {
    const splitSentence = sentence.match(/(\w+)/g) ?? "";
    const words: WordCountType = {};
    for (let i = 0; i < splitSentence.length; i++) {
        const word = splitSentence[i];
        if (!words[word]) {
            words[word] = 1;
        } else {
            words[word]++
        }
    }
    return words;
}