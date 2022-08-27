import { Fa_To_En } from './../parser/number';

/**
 * get 3 params , check if ip search inside the expected ip range
 * @param startIP 
 * @param endIP 
 * @param searchIP 
 * @returns 
 */
export const IpRange = (startIP: string, endIP: string, searchIP: string): boolean => {
    if (startIP && endIP && searchIP) {
        startIP = Fa_To_En(startIP); endIP = Fa_To_En(endIP); searchIP = Fa_To_En(searchIP);
        startIP = startIP.split(".")[2]; endIP = endIP.split(".")[2]; searchIP = searchIP.split(".")[2];
        if (+startIP <= +searchIP && +searchIP <= +endIP) return true
    }
    return false;
}

