import { RemoveSpace } from './../text';
import { describe, test, expect } from '@jest/globals';

describe('text parser', () => {
    test('remove all space on text', () => {
        expect(RemoveSpace("the  star wa rrrr ssss  !")).toBe("thestarwarrrrssss!");
    })
})