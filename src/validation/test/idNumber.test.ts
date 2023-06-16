import { describe, expect, test } from '@jest/globals';
import { CheckIdNumber, IdNumberFind } from '../idNumber';

describe('Card', () => {
  test('Id Number city', () => {
    expect(IdNumberFind('194')).toMatchObject({
      province: 'خوزستان',
      city: 'بندرماهشهر',
    });
  });
  test('Id Number is valid', () => {
    //expect(CheckIdNumber("your id number 😎")).toBeTruthy(); // This test condition most be truthy
    expect(CheckIdNumber('۱۲۳۴۵۶۷۸۹0')).toBeFalsy(); // This test condition most be falsy
    expect(CheckIdNumber('123۴۶۷۱۲11')).toBeFalsy(); // This test condition most be falsy
    expect(CheckIdNumber('0054725112')).toBeFalsy(); // This test condition most be false because does not exists
  });
});
