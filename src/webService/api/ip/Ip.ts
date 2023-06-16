import axios, { AxiosInstance } from 'axios';

/**
 * A class representing an instance of the IpApi.
 */
export class IpApi {
  /**
   * Creates an instance of Axios with a base URL and timeout.
   * @returns {Promise<AxiosInstance>} - A Promise that resolves to an instance of Axios.
   */
  IpCreate = async (): Promise<AxiosInstance> =>
    await axios.create({
      baseURL: `http://ip-api.com/json/`,
      timeout: 10000,
    });
}
