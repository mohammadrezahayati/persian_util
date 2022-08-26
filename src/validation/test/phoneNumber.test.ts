import { describe, expect, test } from '@jest/globals';
import { isMCI, isMTN, isRightel } from '../';

describe('Operator Check', () => {
  test('MCI', () => {
    expect(isMCI("989113456787")).toBe(true);
  });
  test('MTN', () => {
    expect(isMTN("+989333456787")).toBe(true);
  });
  test('MCI', () => {
    expect(isRightel("00989213456787")).toBe(true);
  });
});