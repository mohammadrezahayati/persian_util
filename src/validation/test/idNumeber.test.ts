
import { describe, test, expect } from "@jest/globals"
import { CheckIdNumber, IdNumberFind } from "../idNumber"
describe("Card", () => {
    test("Id Number city", () => {
        expect(IdNumberFind("۱۶۹")).toMatchObject({ province: "آذربایجان شرقی", city: "آذرشهر" })

    })
    test("Id Number is valid", () => {
        expect(CheckIdNumber("۱۱۲۲۳۳۴۴۵۵")).toBeTruthy()
        expect(CheckIdNumber("1122334455")).toBeTruthy()

    })
})