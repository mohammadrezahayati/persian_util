/* The line `import { describe, expect, test } from '@jest/globals';` is importing the `describe`,
`expect`, and `test` functions from the `@jest/globals` module. These functions are part of the Jest
testing framework and are used to define and run test cases. */
import { describe, test, expect } from '@jest/globals';
/* The line `import { IP } from '../ip/ip';` is importing the `IP` class from the `../ip/ip` module.
This allows the code to use the methods and properties defined in the `IP` class. */
import { IP } from '../ip/ip';

/**
 * A test suite for the IP class, which provides methods for retrieving information about IP addresses.
 */
describe('IP Information', () => {
  /**
   * Test function to check IP information using the IP class.
   * @returns None
   * @throws Error if the IP information does not match the expected values.
   */
  test('Check IP Information', async () => {
    const api = await new IP();
    const res = await api.getIpInfo('137.184.82.151');
    expect(res).toMatchObject({
      status: 'success',
      country: 'United States',
      countryCode: 'US',
      region: 'CA',
      regionName: 'California',
      city: 'Santa Clara',
      zip: '95054',
      lat: 37.3931,
      lon: -121.962,
      timezone: 'America/Los_Angeles',
      isp: 'DigitalOcean, LLC',
      org: 'DigitalOcean, LLC',
      as: 'AS14061 DigitalOcean, LLC',
      query: '137.184.82.151',
    });
  });

  /**
   * Tests whether the given IP address is from Iran.
   * @returns None
   */
  test('Is IP from Iran', async () => {
    const api = await new IP();
    const res = await api.IsIpFromIran('103.130.144.0');
    expect(res).toBeTruthy();
  });
});
