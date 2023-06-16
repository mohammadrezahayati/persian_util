import { describe, expect, test } from '@jest/globals';
import { Err } from '../error';
import { CardBank } from '../../validation/cardNumber';

describe('Error', () => {
  test('Get Error response', () => {
    const error = new Err(
      CardBank('5022291045674567'),
      'پاسارگاد',
      EvalError(),
      'some asdasdasdasdasd'
    );
    expect(error.getError()).toBe(true);
    const error1 = new Err(
      CardBank('502229104566678'),
      false,
      ReferenceError(),
      'some message'
    );
    expect(error1.getError()).toBe(true);
  });
});
