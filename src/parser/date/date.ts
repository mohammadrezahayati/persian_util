import { En_To_Fa } from './../number/EnToFa';
//duration
//change time to some format
//change format to real time

export function dateDiffInDays(a: Date, b: Date) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

// test it
const a = new Date("2017-01-01"),
    b = new Date("2017-06-25"),
    difference = dateDiffInDays(a, b);

console.log(`${En_To_Fa(`${difference}`)}  روز`)