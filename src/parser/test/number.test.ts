import {describe, expect, test} from '@jest/globals';
import {En_To_Fa , Fa_To_En} from "../"
describe("Parse Number",()=>{
    test("Parse EN Number to FA",()=>{
        expect(En_To_Fa("09123456789")).toBe("۰۹۱۲۳۴۵۶۷۸۹")
    })
    test("Parse FA Number to EN",()=>{
        expect(Fa_To_En("۰۹۱۲۳۴۵۶۷۸۹")).toBe("09123456789")
    })
})