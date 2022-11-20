import { describe, test, expect } from "@jest/globals"
import { MAC } from "../mac"

describe("MAC Information", () => {

    test("Check MAC Information", async () => {
        const api = await new MAC();
        const res = await api.getMacInfo("00:23:AB:7B:58:99")
        expect(res).toMatchObject([{
            "startHex": "0023AB000000",
            "endHex": "0023ABFFFFFF",
            "startDec": "153192759296",
            "endDec": "153209536511",
            "company": "CISCO SYSTEMS, INC.",
            "addressL1": "170 W. TASMAN DRIVE",
            "addressL2": "M/S SJA-2",
            "addressL3": "SAN JOSE CA 95134-1706",
            "country": "UNITED STATES",
            "type": "MA-L"
        }])
    })
})