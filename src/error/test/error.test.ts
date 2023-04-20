import { describe, expect, test } from "@jest/globals"
import { Err } from "../error"
import { CardBank } from "../../validation/cardNumber";

describe("Error", () => {
    test("Get Error response", () => {
        const error = new Err(CardBank("5022291045666782"), true, undefined, "some asdasdasdasdasd");
        expect(error.getError()).toBe(false)
        const error1 = new Err(CardBank("5022291045666784"), true, undefined, "some message");
        expect(error1.getError()).toBe(true)
    })
})