import { describe, expect, test } from '@jest/globals';
import {numberToWord} from "../number/numberToWord";


describe("parse digits to string and reverse", () => {
    test("change number to word", () => {
        expect(numberToWord(120000002)).toBe("صد  و بیست میلیون دو");
        expect(numberToWord(12000000000)).toBe("دوازده میلیارد");
    })
})