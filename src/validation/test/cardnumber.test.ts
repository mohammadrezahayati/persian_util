import { describe, test, expect } from '@jest/globals';
import { CardBank, CheckCardNumber } from '../cardNumber';

describe('Card', () => {
  test('Card is Valid', () => {
    expect(CheckCardNumber('6037 9918 3333 4444')).toBeTruthy();
    expect(CheckCardNumber('5859831133334444')).toBeTruthy();
    expect(CheckCardNumber('5022-2910-3333-4444')).toBeTruthy();
  });
  test('Bank Card name', () => {
    expect(CardBank('5022293345678976')).toStrictEqual('پاسارگاد');
  });
});
