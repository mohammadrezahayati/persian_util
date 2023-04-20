import { describe, expect, test } from "@jest/globals"
import { Err } from "../error"
import { CardBank } from "../../validation/cardNumber";

describe("Error", () => {
    test("Get Error response", () => {
        const error = new Err(CardBank("502229104566678"), true, undefined, "some message");
        expect(error.getError()).toBe("a")
    })
})