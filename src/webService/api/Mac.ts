import axios, { AxiosInstance } from "axios";

class MacApi {
    MacCreate = async (): Promise<AxiosInstance> => await axios.create({
        baseURL: `https://www.macvendorlookup.com/api/v2/`,
        timeout: 10000,
    });
}

export default MacApi;