import { idNumberFindType, idNumberByCityType } from './../types/idNumber';
import { idNumbersByCity } from "../constants/idNumber"
import { Fa_To_En } from "../parser";

/**
 * get idNumber and check it if true return province and city
 * @param id 
 * @returns object : { province: "", city: "" }
 */
export const IdNumberFind = (id: string): idNumberFindType | undefined => {
    id = Fa_To_En(id.slice(0, 3))
    const findCity = idNumbersByCity.find((item: idNumberByCityType) => item.from === id || item.to === id);
    if (findCity) {
        return { province: findCity.province, city: findCity.city };
    }
    return;
}

/**
 * get idNumber and check it if exists and valid
 * @param id 
 * @returns boolean
 */
export const CheckIdNumber = (id: string): boolean => {

    const regex = /^\d{10}$/g
    if (regex.test(Fa_To_En(id))) {
        const notAllowedDigits = {
            "0000000000": true,
            "1111111111": true,
            "2222222222": true,
            "3333333333": true,
            "4444444444": true,
            "5555555555": true,
            "6666666666": true,
            "7777777777": true,
            "8888888888": true,
            "9999999999": true,
        };
        if (id in notAllowedDigits) return false;
        const L = id.length;
        if (L < 8 || parseInt(id, 10) == 0) return false;
        id = ('0000' + id).substr(L + 4 - 10);
        if (parseInt(id.substr(3, 6), 10) == 0) return false;
        const c = parseInt(id.substr(9, 1), 10);
        let s = 0;
        for (let i = 0; i < 9; i++)
            s += parseInt(id.substr(i, 1), 10) * (10 - i);
        s = s % 11;
        return (s < 2 && c == s) || (s >= 2 && c == (11 - s));
        return true;
    }
    return false;
}