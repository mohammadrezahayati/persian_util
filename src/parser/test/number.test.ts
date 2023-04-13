import { Add_Commas, En_To_Fa, Fa_To_En, Remove_Commas, Rial_To_Toman, Toman_To_Rial } from '@Parser';
import { describe, expect, test } from '@jest/globals';
describe("Parse Number", () => {
    test("Parse EN Number to FA", () => {
        expect(En_To_Fa("09123456789")).toBe("۰۹۱۲۳۴۵۶۷۸۹")
    })
    test("Parse FA Number to EN", () => {
        expect(Fa_To_En("۰۹۱۲۳۴۵۶۷۸۹")).toBe("09123456789")
    })
    test("Parse FA IP to EN", () => {
        expect(Fa_To_En("۱۱۱.۱۱۱.۱۱۱.۱۱۱")).toBe("111.111.111.111")
    })
    test("Parse Rial to Toman", () => {
        expect(Rial_To_Toman(10564523)).toBe("1056452")
    })

    test("Parse Toman to Rial", () => {
        expect(Toman_To_Rial(10564523)).toBe(105645230)
    })

    test("Add Commas", () => {
        expect(Add_Commas("30001000")).toBe("30,001,000")
    })
    test("Remove Commas", () => {
        expect(Remove_Commas("30,001,000")).toBe("30001000")
    })
})