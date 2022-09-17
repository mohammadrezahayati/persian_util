
import { describe, test, expect } from "@jest/globals"
import { CheckIdNumber, IdNumberFind } from "../idNumber"
describe("Card", () => {
    test("Id Number city", () => {
        expect(IdNumberFind("194")).toMatchObject({ province: "خوزستان", city: "بندرماهشهر" })

    })
    test("Id Number is valid", () => {
        //expect(CheckIdNumber("your id number 😎")).toBeTruthy(); // This condition most be truthy
        expect(CheckIdNumber("0054725112")).toBeFalsy(); // This condition most be false because does not exists
    })
})