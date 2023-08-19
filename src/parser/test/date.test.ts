import { describe, expect, test } from '@jest/globals';
import { DateDiffInDays } from '../date';
import { En_To_Fa } from '../number';

/* The code is defining a test case for the `dateDiffInDays` function. */
describe('Date', () => {
    /* The code is defining a test case for the `dateDiffInDays` function. */
    test('Duration', () => {
        /* The code is creating two Date objects, `a` and `b`, representing the dates "2017-01-01" and
        "2017-06-25" respectively. */
        const a = new Date("2017-01-01"),
            b = new Date("2017-06-25"),
            difference = DateDiffInDays(a, b);
        const test  = En_To_Fa(`${difference}`)
        expect(test).toBe('۱۷۵');
    });
});