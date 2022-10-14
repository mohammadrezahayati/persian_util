import { LetterCountType, WordCountType } from './../types/string';

/**
 * This function get an sentence and count all duplicated words 
 * @param Sentence 
 */
export const WordCount = (sentence: string) => {
    const splitSentence = sentence.split(" ");
    const words: WordCountType = {};
    for (let i = 0; i < splitSentence.length; i++) {
        const word = splitSentence[i];
        if (!words[word]) {
            words[word] = 1
        } else {
            words[word]++
        }
    }
    return words;
}

/**
 * This function get an sentence and count all duplicated letter 
 * @param Sentence 
 */
export const letterCount = (letter: string) => {
    const words: LetterCountType = {};
    for (let i = 0; i < letter.length; i++) {
        const word = letter[i];
        if (!words[word]) {
            words[word] = 1
        } else {
            words[word]++
        }
    }
    return words;
}