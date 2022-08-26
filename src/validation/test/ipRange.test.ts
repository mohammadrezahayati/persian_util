import { describe, test, expect } from "@jest/globals"
import { IpRange } from "../"
describe("IP Range", () => {
    test("Check IP on Range", () => {
       expect(IpRange("100.101.120","100.101.130","100.101.125")).toBeTruthy()
    })
})