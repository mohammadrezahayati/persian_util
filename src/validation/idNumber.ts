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
        id = id.slice(0, 3)
        const findCity = idNumbersByCity.find((item: idNumberByCityType) => item.from === id || item.to === id);
        if (findCity) {
            return true;
        }
    }
    return false;
}