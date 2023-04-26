import { describe, expect, test } from "@jest/globals"
import { Holiday } from "../holiday"
describe("Card", () => {
    test("Pase CardNumber", () => {
        const hd = new Holiday("US");
        expect(hd.getHolidays(2022)).toBe(false)
     })
})