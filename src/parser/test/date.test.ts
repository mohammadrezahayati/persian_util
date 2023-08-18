import { describe, expect, test } from '@jest/globals';
import { dateDiffInDays } from '../date';
import { En_To_Fa } from '../number';

/* The code is defining a test case for the `dateDiffInDays` function. */
describe('Date', () => {
    /* The code is defining a test case for the `dateDiffInDays` function. */
    test('Duration', () => {
        const a = new Date("2017-01-01"),
            b = new Date("2017-06-25"),
            difference = dateDiffInDays(a, b);
        const test  = En_To_Fa(`${difference}`)
        expect(test).toBe('۱۷۵');
    });
});