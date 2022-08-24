"use strict";
// made by @mohammadrezahayati
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckPersianNumber = exports.ChangePersianToEnglish = void 0;
//This Function get a persian @number and change it to english @number and return it.
const ChangePersianToEnglish = (number) => {
    if (!number)
        return;
    return;
};
exports.ChangePersianToEnglish = ChangePersianToEnglish;
//This function get a persian @number and check it if valid or not and return boolean
const CheckPersianNumber = (number) => {
    if (!number)
        return;
    const numberRegex = /^(\+98|0098|98|0)?9\d{9}$/;
    const res = numberRegex.test(number);
    return res;
};
exports.CheckPersianNumber = CheckPersianNumber;
//This function get an @array and @keyword, search inside the array and if find something return it
// export const SearchOnPersian = <T ,K, R>(items : T , keyword :K ) : R => {
//     return "" as R;
// }
//console.log(CheckPersianNumber("+989123456789"))
