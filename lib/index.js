"use strict";
// made by @mohammadrezahayati
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckPersianPhone = exports.ChangePersianNumberToEnglish = void 0;
//This Function get a persian @number and change it to english @number and return it.
const ChangePersianNumberToEnglish = (number) => {
    if (!number)
        return;
    const res = number.replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString());
    return res;
};
exports.ChangePersianNumberToEnglish = ChangePersianNumberToEnglish;
//This function get a persian @number and check it if valid or not and return boolean
const CheckPersianPhone = (number) => {
    if (!number)
        return;
    const numberRegex = /^(\+98|0098|98|0)?9\d{9}$/;
    const res = numberRegex.test(number);
    return res;
};
exports.CheckPersianPhone = CheckPersianPhone;
//This function get an @array and @keyword, search inside the array and if find something return it
// export const SearchOnPersian = <T ,K, R>(items : T , keyword :K ) : R => {
//     return "" as R;
// }
console.log((0, exports.ChangePersianNumberToEnglish)("۰۱۲۳۴۵۶۷۸۹"));
//Todo: create function to find sheba logo;
//Todo: create function to find card logo;
//Todo: create function to find card logo;
