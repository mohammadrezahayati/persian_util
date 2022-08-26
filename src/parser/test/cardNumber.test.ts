import { describe, test, expect } from "@jest/globals"
import { CardNumberParse } from "../"
describe("Card", () => {
    test("Pase CardNumber", () => {
        expect(CardNumberParse("1111-2222-3333-4444")).toStrictEqual("1111222233334444")
        expect(CardNumberParse("1111 2222 3333 4444")).toStrictEqual("1111222233334444")
        expect(CardNumberParse("۱۱۱۱.۲۲۲۲.۳۳۳۳.۴۴۴۴")).toStrictEqual("1111222233334444")
    })
})