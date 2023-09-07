/* The line `import axios, { AxiosInstance } from 'axios';` is importing the `axios` library and the
`AxiosInstance` type from the `axios` module. */
import axios, { AxiosInstance } from 'axios';

/**
 * A class representing a Mac API.
 */
export class MacApi {
  /**
   * Creates an Axios instance with a base URL and timeout.
   * @returns {Promise<AxiosInstance>} - A Promise that resolves to an Axios instance.
   */
  MacCreate = async (): Promise<AxiosInstance> =>
    await axios.create({
      baseURL: `https://www.macvendorlookup.com/api/v2/`,
      timeout: 10000,
    });
}
