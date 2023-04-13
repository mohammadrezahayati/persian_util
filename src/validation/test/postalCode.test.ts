import { describe, test, expect } from "@jest/globals";
import { PostalCodeFind } from "../postalCode/findPostalCode";

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