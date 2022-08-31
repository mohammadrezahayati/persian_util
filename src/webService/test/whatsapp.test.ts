import { Whatsapp } from './../auth/';
import { describe, test, expect } from '@jest/globals';
describe("WhatsApp Api", () => {
    test("whatsApp send Message", async () => {
        const api = new Whatsapp()
        const res = await api.sendMessage("", "", "", "پیام تستی");
        //expect(res).toMatchObject({"code":"287456509","status": 100 })
    })
    // test("whatsApp status Message", async () => {
    //     const api = new Whatsapp()
    //     const res = api.statusMessage();
    //     expect().toMatchObject({"messageStatus":"approve","messageReport": [{"DestPhoneNumber":"09056489927","Status":"sent" }],"status": 100})
    // })

})
