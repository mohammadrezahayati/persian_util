/* The `import { WordCountType } from '../../types/string/wordCount';` statement is importing the
`WordCountType` type from the `wordCount` module located in the `../../types/string` directory. This
type is used to define the structure of the object that will be returned by the `WordCount`
function. */
import { WordCountType } from '../../types/string/wordCount';

/**
 * Takes in a sentence and returns an object containing the count of each word in the sentence.
 * @param {string} sentence - the sentence to count the words in
 * @returns {WordCountType} - an object containing the count of each word in the sentence
 */
export const WordCount = (sentence: string) => {
  const splitSentence = sentence.match(/(\w+)/g) ?? '';
  const words: WordCountType = {};
  for (let i = 0; i < splitSentence.length; i++) {
    const word = splitSentence[i];
    if (!words[word]) {
      words[word] = 1;
    } else {
      words[word]++;
    }
  }
  return words;
};
