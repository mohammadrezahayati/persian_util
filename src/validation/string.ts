import { LetterCountType, WordCountType } from './../types/string';

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


/**
 * Give it persian sentences and remove all space between some letter
 * @param sentence : string
 * @returns 
 */
export const PersianLetterSpacing = (sentence: string) => {
    return sentence
        .replace(/\u00ad/g, "‌")
        .replace(/\u200C{2,}/g, "‌")
        .replace(/([۰-۹0-9إأةؤورزژاآدذ،؛,:«»\\/@#$٪×*()ـ\-=|])\u200c/g, "$1")
        .replace(/\u200c([\u064e\u0650\u064f\u064b\u064d\u064C\u0651\u06C0])/g, "$1")
        .replace(/\u200c([\w])/g, "$1")
        .replace(/([\w])\u200c/g, "$1")
        .replace(/\u200c([\n\s[].،«»:()؛؟?;$!@-=+\\])/g, "$1")
        .replace(/([\n\s[.،«»:()؛؟?;$!@\-=+\\])\u200c/g, "$1")
        .replace(/\s+\u200C|\u200C\s+/g, " ")
        .replace(/((\s|^)ن?می)\u0020/g, "$1‌")
        .replace(/((\s|^)بی)\u0020/g, "$1‌")
        .replace(/\u0020((ام|ات|اش|ای|اید|ایم|اند)\s)/g, "‌$1")
        .replace(/\u0020(ها(ی)?\s)/g, "‌$1")
        .replace(/\u0020(تر((ی)|(ین))?\s)/g, "‌$1")
        .replace(/\u0020((هایی|هایم|هایت|هایش|هایمان|هایتان|هایشان)\s)/g, "‌$1");
}


/**
 * get a text and remove all space between letters
 * @param text 
 * @return string
 */
export const RemoveSpace = (text: string): string => text.replace(/\s/g, '')