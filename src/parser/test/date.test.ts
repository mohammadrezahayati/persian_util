/* The line `import { describe, expect, test } from '@jest/globals';` is importing the `describe`,
`expect`, and `test` functions from the `@jest/globals` module. These functions are part of the Jest
testing framework and are used to define and run tests. */
import { describe, expect, test } from '@jest/globals';

/* The line `import { DateDiffInDays } from '../date';` is importing the `DateDiffInDays` function from
the `date` module. This function is likely used to calculate the difference in days between two
dates. */
import { DateDiffInDays } from '../date';

/* The line `import { En_To_Fa } from '../number';` is importing the `En_To_Fa` function from the
`number` module. This function is likely used to convert English numbers to Persian (Farsi) numbers. */
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