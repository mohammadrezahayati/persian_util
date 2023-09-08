/* The line `import { AxiosInstance } from 'axios';` is importing the `AxiosInstance` type from the
'axios' library. This allows the code to use the `AxiosInstance` type to define the type of the
`MacInstance` property in the `MAC` class. The `AxiosInstance` type represents an instance of the
Axios library, which is used for making HTTP requests. */
import { AxiosInstance } from 'axios';

/* The line `import { MacType } from '../../types/mac/macApi';` is importing the `MacType` type from
the file located at `../../types/mac/macApi`. This allows the `Mac` class to use the `MacType` type
to define the return type of the `getMacInfo` method. The `MacType` type likely represents the
structure or shape of the data that is expected to be returned from the external API when retrieving
information about a MAC address. */
import { MacType } from '../../types/mac/macApi';

/* The line `import { MacApi } from '../../webService/api/mac/Mac';` is importing the `MacApi` class
from the file located at `../../webService/api/mac/Mac`. This allows the `Mac` class to use the
methods and functionality provided by the `MacApi` class. */
import { MacApi } from '../../webService/api/mac/Mac';

/**
 * A class representing a MAC address and providing methods to retrieve information about it.
 */
export class MAC {
  /**
   * A Promise that resolves to an AxiosInstance for making HTTP requests on a Mac.
   * @returns A Promise that resolves to an AxiosInstance.
   */
  private MacInstance: Promise<AxiosInstance>;
  /**
   * Creates a new instance of the class, with an optional Mac address.
   * @param {string} [mac] - The Mac address to use for the instance.
   * @returns An instance of the class.
   */
  constructor(private mac?: string) {
    this.MacInstance = new MacApi().MacCreate();
  }
  /**
   * Retrieves information about a given MAC address using an external API.
   * @param {string} mac - The MAC address to retrieve information for.
   * @returns {Promise<MacType>} - A promise that resolves to an object containing information about the MAC address.
   */
  getMacInfo = async (mac: string): Promise<MacType> => {
    const apiCall = (await this.MacInstance).get<MacType>(`${mac || this.mac}`);
    const res = (await apiCall).data;
    return res;
  };
}
