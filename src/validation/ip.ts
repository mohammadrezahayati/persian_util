import { AxiosInstance } from 'axios';
import { IpApiType } from '../types/ip';
import IpApi from '../webService/api/Ip';

export class IP {
    private IpInstance: Promise<AxiosInstance>;
    constructor(private ip?: string) {
        this.IpInstance = new IpApi().IpCreate();
    }
    getIpInfo = async (ip: string): Promise<IpApiType> => {
        const apiCall = (await this.IpInstance).get<IpApiType>(`${ip || this.ip}`);
        const res = (await apiCall).data
        return res;
    }
    IsIpFromIran = async (ip: string): Promise<boolean> => {
        const resApi = await this.getIpInfo(ip)
        if (resApi && resApi.country === "Iran") return true;
        return false;
    }
}




