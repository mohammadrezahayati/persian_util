/**
 * The function calculates the difference in days between two given dates.
 * @param {Date} a - The parameter "a" is a Date object representing the first date.
 * @param {Date} b - The parameter "b" represents the second date for which you want to calculate the
 * difference in days.
 * @returns the difference in days between two given dates.
 */
export const DateDiffInDays = (a: Date, b: Date) => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};
