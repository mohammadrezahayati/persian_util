import { letterCount, PersianLetterSpacing, RemoveSpace, WordCount } from './../string';
import { describe, test, expect } from "@jest/globals"


describe("String", () => {
    test("Word Count", () => {
        const words = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        const res = WordCount(words);
        expect(res).toMatchObject({ "1500s": 1, "1960s": 1, "Aldus": 1, "Ipsum": 4, "It": 2, "Letraset": 1, "Lorem": 4, "PageMaker": 1, "a": 2, "also": 1, "an": 1, "and": 3, "been": 1, "book": 1, "but": 1, "centuries": 1, "containing": 1, "desktop": 1, "dummy": 2, "electronic": 1, "essentially": 1, "ever": 1, "five": 1, "galley": 1, "has": 2, "in": 1, "including": 1, "industry": 2, "into": 1, "is": 1, "it": 1, "leap": 1, "like": 1, "make": 1, "more": 1, "not": 1, "of": 4, "only": 1, "passages": 1, "popularised": 1, "printer": 1, "printing": 1, "publishing": 1, "recently": 1, "release": 1, "remaining": 1, "s": 1, "scrambled": 1, "sheets": 1, "simply": 1, "since": 1, "software": 1, "specimen": 1, "standard": 1, "survived": 1, "text": 2, "the": 6, "to": 1, "took": 1, "type": 2, "typesetting": 2, "unchanged": 1, "unknown": 1, "versions": 1, "was": 1, "when": 1, "with": 2 });
    });
    test("Letter Count", () => {
        const letters = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
        const res = letterCount(letters);
        expect(res).toMatchObject({ "0": 3, "1": 2, "5": 1, "6": 1, "9": 1, "A": 1, "I": 6, "L": 5, "M": 1, "P": 1, "a": 28, "b": 5, "c": 10, "d": 16, "e": 59, "f": 6, "g": 11, "h": 14, "i": 32, "k": 7, "l": 17, "m": 18, "n": 38, "o": 25, "p": 18, "r": 24, "s": 39, "t": 43, "u": 17, "v": 5, "w": 6, "x": 2, "y": 13 });
    });
    test("Letter letter spacing", () => {
        const sentence = "?????? ???????????? ?????? ???? ???? ??????????"
        const res = PersianLetterSpacing(sentence);
        expect(res).toBe("?????? ???????????? ?????? ???? ?????????????????");
    });
    describe('text parser', () => {
        test('remove all space on text', () => {
            expect(RemoveSpace("the  star wa rrrr ssss  !")).toBe("thestarwarrrrssss!");
        });
    });
})