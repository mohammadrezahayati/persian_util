import { LetterCountType } from '../../types/string/letterCount';

/**
 * Takes in a string and returns an object containing the count of each letter in the string.
 * @param {string} letter - the string to count the letters of
 * @returns An object containing the count of each letter in the string.
 */
export const letterCount = (letter: string) => {
  const letterFix = letter.match(/(\w)/g) ?? '';
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
};
