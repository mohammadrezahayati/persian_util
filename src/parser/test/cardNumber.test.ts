import { CardNumberParse } from "@Parser"
import { describe, test, expect } from "@jest/globals"
describe("Card", () => {
    test("Pase CardNumber", () => {
        expect(CardNumberParse("1111-2222-3333-4444")).toStrictEqual("1111222233334444")
        expect(CardNumberParse("1111 2222 3333 4444")).toStrictEqual("1111222233334444")
        expect(CardNumberParse("۱۱۱۱.۲۲۲۲.۳۳۳۳.۴۴۴۴")).toStrictEqual("1111222233334444")
    })
})