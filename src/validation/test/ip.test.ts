import { describe, test, expect } from "@jest/globals"
import { IP } from "../ip"

describe("IP Information", () => {
    
    test("Check IP Information", async () => {
        const api = await new IP();
        const res = await api.getIpInfo("137.184.82.151");
        expect(res).toMatchObject({
            "status": "success",
            "country": "United States",
            "countryCode": "US",
            "region": "CA",
            "regionName": "California",
            "city": "Santa Clara",
            "zip": "95054",
            "lat": 37.3931,
            "lon": -121.962,
            "timezone": "America/Los_Angeles",
            "isp": "DigitalOcean, LLC",
            "org": "DigitalOcean, LLC",
            "as": "AS14061 DigitalOcean, LLC",
            "query": "137.184.82.151"
        });
    })
    
    test("Is IP from Iran", async () => {
        const api = await new IP()
        const res = await api.IsIpFromIran("103.130.144.0")
        expect(res).toBeTruthy()
    })
})