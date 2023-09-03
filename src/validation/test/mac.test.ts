import { describe, test, expect } from '@jest/globals';
/* The line `import { MAC } from '../mac/mac';` is importing the `MAC` class from the `../mac/mac`
module. This allows the code to use the `MAC` class and its methods in the test suite. */
import { MAC } from '../mac/mac';

/**
 * A test suite for the MAC class that checks if the getMacInfo method returns the correct information.
 * @returns None
 */
describe('MAC Information', () => {
  /**
   * Tests the MAC class by checking if the MAC information for a given MAC address is correct.
   * @returns None
   */
  test('Check MAC Information', async () => {
    const api = await new MAC();
    const res = await api.getMacInfo('00:23:AB:7B:58:99');
    expect(res).toMatchObject([
      {
        startHex: '0023AB000000',
        endHex: '0023ABFFFFFF',
        startDec: '153192759296',
        endDec: '153209536511',
        company: 'CISCO SYSTEMS, INC.',
        addressL1: '170 W. TASMAN DRIVE',
        addressL2: 'M/S SJA-2',
        addressL3: 'SAN JOSE CA 95134-1706',
        country: 'UNITED STATES',
        type: 'MA-L',
      },
    ]);
  });
});
