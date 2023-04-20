import { idNumbersByCity } from "../../constants/idNumber";
import { Fa_To_En } from "../../parser/number/FaToEn";
import { idNumberFindType, idNumberByCityType } from "../../types/idNumber";

/**
 * get idNumber and check it if true return province and city
 * @param id 
 * @returns object : { province: "", city: "" } 
 */
export const IdNumberFind = (id: string): idNumberFindType | undefined | boolean => {
    id = Fa_To_En(id.slice(0, 3));
    const findCity = idNumbersByCity.find((item: idNumberByCityType) => item.from === id || item.to === id);
    if (findCity) {
        return { province: findCity.province, city: findCity.city };
    }
    return false;
}