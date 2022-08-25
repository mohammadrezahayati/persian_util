"use strict";
exports.__esModule = true;
exports.CheckPersianPhone = void 0;
var parser_1 = require("../parser");
/**
 * This function get a persian @number and check it if valid or not and return @boolean
 * @param number
 * @returns boolean
 */
var CheckPersianPhone = function (number) {
    var numberRegex = /^(\+98|0098|98|0)?9\d{9}$/, parseFaToEn = (0, parser_1.Fa_To_En)(number), res = numberRegex.test(parseFaToEn);
    return res;
};
exports.CheckPersianPhone = CheckPersianPhone;
var parser1 = (0, exports.CheckPersianPhone)("۰۹۱۲۳۴۵۴۳۵۶");
var parser2 = (0, exports.CheckPersianPhone)("+۹۸۹۱۲۳۴۵۴۳۵۶");
var parser3 = (0, exports.CheckPersianPhone)("۰۰۹۸۹۱۲۳۴۵۴۳۵۶");
var parser4 = (0, exports.CheckPersianPhone)("۹۸۹۱۲۳۴۵۴۳۵۶");
console.log(parser1, parser2, parser3, parser4);
