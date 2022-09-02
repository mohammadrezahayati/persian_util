import axios, { AxiosInstance } from "axios";

class IpApi {
    IpCreate = async (): Promise<AxiosInstance> => await axios.create({
        baseURL: `http://ip-api.com/json/`,
        timeout: 10000,
    })
}

export default IpApi;