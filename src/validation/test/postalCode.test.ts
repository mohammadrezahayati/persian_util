import { PostalCodeFind } from "@Validation";
import { describe, test, expect } from "@jest/globals";

describe("Card", () => {
    test("Card is Valid", () => {
        expect(PostalCodeFind("۵۹۴۳۲")).toMatchObject({
            province: "آذربایجان غربی", city: "بوکان"
        });
        expect(PostalCodeFind("63511")).toMatchObject({
            province: "خوزستان", city: "ماهشهر"
        });
    })

})