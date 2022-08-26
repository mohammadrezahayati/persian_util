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
    expect(isMCI("00989213456787")).toBe(true);
  });
  test('Rightel', () => {
    expect(isRightel("09113456787")).toBe(true);
  });
});