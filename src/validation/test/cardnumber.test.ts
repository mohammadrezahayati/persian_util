import { describe, test, expect } from "@jest/globals"
import { CheckCardNumber, CardBank } from "../"
describe("Card", () => {
    test("Card is Valid", () => {
        expect(CheckCardNumber("1111 2222 3333 4444")).toBeTruthy()
        expect(CheckCardNumber("1111222233334444")).toBeTruthy()
        expect(CheckCardNumber("1111-2222-3333-4444")).toBeTruthy()
    })
    test("Bank Card name", () => {
        expect(CardBank("5022293345678976")).toStrictEqual("پاسارگاد")
    })
})