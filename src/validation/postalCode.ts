import { Fa_To_En } from './../parser/number';
/**
 * TODO: create function to check is valid or not
 * TODO: create function to check postal code from where?
 */
interface postalCodeType {
    province: string;
    city: string
    from: string
    to: string
}
interface PostalCodeFindType {
    province: string;
    city: string
}
const postalCodes: postalCodeType[] = [
    { province: "آذربایجان شرقی", city: "تبریز", from: "۵۱۳۳۱", to: "۵۱۹۹۹" },
    { province: "آذربایجان شرقی", city: "میانه", from: "۵۳۱۳۱", to: "۵۳۴۹۱" },
    { province: "آذربایجان شرقی", city: "اسکو", from: "۵۳۵۱۱", to: "۵۳۵۹۱" },
    { province: "آذربایجان شرقی", city: "سردرود", from: "۵۳۶۱۶", to: "۵۳۶۵۱" },
    { province: "آذربایجان شرقی", city: "باسمنج", from: "۵۳۶۶۱", to: "۵۳۶۹۱" },
    { province: "آذربایجان شرقی", city: "آذرشهر", from: "۵۳۷۱۱", to: "۵۳۷۹۱" },
    { province: "آذربایجان شرقی", city: "شبستر", from: "۵۳۸۱۱", to: "۵۳۸۹۱" },
    { province: "آذربایجان شرقی", city: "هریس", from: "۵۳۹۱۱", to: "۵۳۹۹۱" },
    { province: "آذربایجان شرقی", city: "مرند", from: "۵۴۱۳۱", to: "۵۴۱۹۹" },
    { province: "آذربایجان شرقی", city: "جلفا", from: "۵۴۳۱۱", to: "۵۴۳۱۹" },
    { province: "آذربایجان شرقی", city: "اهر", from: "۵۴۴۹۱", to: "۵۴۵۶۱" },
    { province: "آذربایجان شرقی", city: "کلیبر", from: "۵۴۶۱۱", to: "۵۴۶۹۱" },
    { province: "آذربایجان شرقی", city: "سراب", from: "۵۴۷۱۱", to: "۵۴۸۹۱" },
    { province: "آذربایجان شرقی", city: "بستان آباد", from: "۵۴۹۱۱", to: "۵۴۹۹۱" },
    { province: "آذربایجان شرقی", city: "مراغه", from: "۵۵۱۳۱", to: "۵۵۳۹۱" },
    { province: "آذربایجان شرقی", city: "عجبشیر", from: "۵۵۴۱۱", to: "۵۵۴۹۱" },
    { province: "آذربایجان شرقی", city: "بناب", from: "۵۵۵۱۱", to: "۵۵۵۹۱" },
    { province: "آذربایجان شرقی", city: "ملکان", from: "۵۵۶۱۱", to: "۵۵۶۹۱" },
    { province: "آذربایجان شرقی", city: "هشترود", from: "۵۵۷۱۱", to: "۵۵۷۸۱" },
    { province: "آذربایجان شرقی", city: "چاراویماق", from: "۵۵۷۹۱", to: "۵۵۹۹۱" },
    { province: "آذربایجان غربی", city: "ارومیه", from: "۵۷۱۳۱", to: "۵۷۵۹۱" },
    { province: "آذربایجان غربی", city: "نقده", from: "۵۷۶۱۱", to: "۵۷۶۹۱" },
    { province: "آذربایجان غربی", city: "اشنویه", from: "۵۷۷۱۱", to: "۵۷۷۹۱" },
    { province: "آذربایجان غربی", city: "خوی", from: "۵۸۱۳۱", to: "۵۸۵۹۱" },
    { province: "آذربایجان غربی", city: "پیرانشهر", from: "۵۷۸۱۱", to: "۵۷۹۹۱" },
    { province: "آذربایجان غربی", city: "سلماس", from: "۵۸۸۱۱", to: "۵۸۹۹۱" },
    { province: "آذربایجان غربی", city: "ماکو", from: "۵۸۶۱۱", to: "۵۸۶۳۱" },
    { province: "آذربایجان غربی", city: "میاندوآب", from: "۵۹۳۵۱", to: "۵۹۳۶۱" },
    { province: "آذربایجان غربی", city: "چالدران", from: "۵۸۶۴۱", to: "۵۸۷۹۱" },
    { province: "آذربایجان غربی", city: "سردشت", from: "۵۹۶۱۱", to: "۵۹۸۹۱" },
    { province: "آذربایجان غربی", city: "مهاباد", from: "۵۹۱۳۱", to: "۵۹۳۴۱" },
    { province: "آذربایجان غربی", city: "بوکان", from: "۵۹۴۳۱", to: "۵۹۵۹۱" },
    { province: "آذربایجان غربی", city: "تکاب", from: "۵۹۹۱۶", to: "۵۹۹۷۱" },

]

/**
 * 
 * @param code 
 * @returns 
 */
export const PostalCodeFind = (code: string) : PostalCodeFindType => {
    code = Fa_To_En(code.slice(0, 5));
    if (code) {
        const postFiltered = postalCodes?.filter(item => (Fa_To_En(item.from) <= code && code <= Fa_To_En(item.to)))
        if(postFiltered){
            const res = postFiltered.map(item => {
                return { province: item.province, city: item.city }
            })
            return res[0];
        }
    }
    return { province: "", city: "" }
}
/**

اردبیل
کد پستی اردبیل
اردبیل: ۵۶۱۳۱ تا ۵۶۴۹۱

بیله سوار: ۵۶۷۱۱ تا ۵۶۷۹۱

پارس آباد: ۵۶۹۱۱ تا ۵۶۹۹۱

خلخال: ۵۶۸۱۱ تا ۵۶۸۹۱

کوثر: ۵۶۸۴۱ تا ۵۶۸۶۱	
گرمی: ۵۶۵۱۱ تا ۵۶۵۹۱

مشکین شهر: ۵۶۶۱۱ تا ۵۶۶۹۱

نمین: ۵۶۳۱۱ تا ۵۶۳۶۱

نیر: ۵۶۴۱۱ تا ۵۶۴۵۱

 

اصفهان
کد پستی اصفهان
اصفهان: ۸۱۳۳۱ تا ۸۳۷۹۱

آران وبیدگل: ۸۷۴۱۱ تا ۸۷۴۹۱

اردستان: ۸۳۸۱۱ تا ۸۴۴۹۱

برخوار و میمه: ۸۳۱۳۱ تا ۸۳۵۹۱

تیران و کرون: ۸۵۳۱۱ تا ۸۵۳۸۱

چادگان: ۸۵۷۱۳ تا ۸۵۷۹۱

خمینی شهر: ۸۴۱۳۱ تا ۸۴۳۹۱

خوانسار: ۸۷۹۱۱ تا ۸۷۹۹۱

سمیرم: ۸۶۶۱۳ تا ۸۶۹۹۱

سمیرم سفلی: ۸۶۴۱۳ تا ۸۶۴۶۱

شهرضا: ۸۶۱۳۱ تا ۸۶۶۱۱

فریدن: ۸۵۶۱۱ تا ۸۵۷۸۱

فریدونشهر: ۸۵۹۱۱ تا ۸۵۹۹۱

فلاورجان: ۸۱۷۸۹ تا ۸۴۶۹۱

کاشان: ۸۷۱۳۱ تا ۸۷۵۹۱

گلپایگان: ۸۷۷۱۱ تا ۸۷۸۹۱

لنجان: ۸۴۷۱۱ تا ۸۴۹۷۱

مبارکه: ۸۴۸۱۱ تا ۸۶۳۱۹

نائین: ۸۳۶۱۱ تا ۸۳۹۹۱	
نجف آباد: ۸۵۱۳۱ تا ۸۵۸۹۱

نطنز: ۸۷۶۱۱ تا ۸۷۶۹۱

ایلام
کد پستی ایلام
ایلام: ۶۹۳۱۱ تا ۶۹۳۹۱

ایوان: ۶۹۴۱۱ تا ۶۹۴۹۱

دره شهر: ۶۹۶۱۱ تا ۶۹۶۹۱

دهلران: ۶۹۸۱۱ تا ۶۹۸۹۱

شیروان و چرداول: ۶۹۵۱۱ تا ۶۹۵۹۱

مهران: ۶۹۹۱۱ تا ۶۹۹۹۱

آبدانان: ۶۹۷۱۱ تا ۶۹۷۹۱

بوشهر
کد پستی بوشهر
بوشهر: ۷۵۱۳۱ تا ۷۵۴۶۱

تنگستان: ۷۵۴۷۱ تا ۷۵۵۱۹

دشتستان: ۷۵۶۱۱ تا ۷۵۶۹۱

دشتی: ۷۵۴۱۱ تا ۷۵۴۵۱

دیر: ۷۵۵۳۱ تا ۷۵۵۵۱

دیلم: ۷۵۳۶۱ تا ۷۵۳۷۱

کنگان: ۷۵۳۹۱ تا ۷۵۵۹۱	
گناوه: ۷۵۳۱۱ تا ۷۵۳۵۱

تهران
کد پستی تهران
منطقه ۱۱: ۱۱۱۱۱ تا ۱۱۹۹۹

منطقه ۱۳: ۱۳۱۱۱ تا ۱۳۹۹۹

منطقه ۱۴: ۱۴۱۱۱ تا ۱۴۹۹۹

منطقه ۱۵: ۱۵۱۱۱ تا ۱۵۹۹۹

منطقه ۱۶: ۱۶۱۱۱ تا ۱۶۹۹۹

منطقه ۱۷: ۱۷۱۱۱ تا ۱۷۹۹۹

منطقه ۱۸: ۱۸۱۱۱ تا ۱۸۹۹۹	
منطقه ۱۹: ۱۹۱۱۱ تا ۱۹۹۹۹

چهارمحال بختیاری
کد پستی چهارمحال بختیاری
شهرکرد: ۸۸۱۳۱ تا ۸۸۵۹۱

اردل: ۸۸۸۱۱ تا ۸۸۸۹۱

بروجن: ۸۸۷۱۱ تا ۸۸۷۹۱

فارسان: ۸۸۶۱۱ تا ۸۸۶۷۱

لردگان: ۸۸۹۱۱ تا ۸۸۹۹۱

کوهرنگ: ۸۸۶۴۱ تا ۸۸۶۹۱

 خراسان جنوبی
کد پستی خراسان جنوبی
بیرجند: ۹۷۱۳۱ تا ۹۷۴۸۱	درمیان: ۹۷۴۴۱ تا ۹۷۴۷۱		
سرایان: ۹۷۷۶۱ تا ۹۷۸۹۱	سربیشه: ۹۷۳۱۱ تا ۹۷۴۹۱		
فردوس: ۹۷۷۱۱ تا ۹۷۸۸۱	قائنات: ۹۷۶۱۱ تا ۹۷۶۹۱		
نهبندان: ۹۷۵۱۱ تا ۹۷۵۹۱			
خراسان رضوی
کد پستی خراسان رضوی
مشهد: ۹۱۳۳۱ تا ۹۳۷۸۱

بردسکن: ۹۶۸۱۱ تا ۹۶۸۹۱

سبزوار: ۹۶۱۳۱ تا ۹۶۵۹۱

کاشمر: ۹۶۷۱۱ تا ۹۶۷۹۱

نیشابور: ۹۳۱۳۱ تا ۹۳۴۹۱

قوچان: ۹۴۷۱۱ تا ۹۴۸۶۱		
تایباد: ۹۵۹۱۱ تا ۹۵۹۹۱

تربت جام: ۹۵۷۱۱    تا ۹۵۸۹۱		
تربت حیدریه: ۹۵۱۳۱ تا ۹۵۵۹۱

خواف: ۹۵۶۱۱ تا ۹۵۶۹۱

چناران:    ۹۳۶۱۱ تا ۹۳۶۹۱	
رشتخوار: ۹۵۴۱۱ تا ۹۵۴۸۱

خلیل آباد: ۹۶۷۵۱ تا ۹۶۷۸۱	
فریمان: ۹۳۹۱۱ تا ۹۳۹۹۱

درگز: ۹۴۹۱۱ تا ۹۴۹۹۱	
گناباد:    ۹۶۹۱۱ تا ۹۶۹۹۱

سرخس: ۹۳۸۱۱ تا ۹۳۸۹۱

کلات: ۹۳۷۱۱ تا ۹۴۹۳۱

خراسان شمالی
کد پستی خراسان شمالی
بجنورد: ۹۴۱۳۱ تا ۹۴۵۹۱

اسفراین: ۹۶۶۱۱ تا ۹۶۶۹۱

جاجرم: ۹۴۳۱۱ تا ۹۴۴۹۱

شیروان: ۹۴۶۱۱ تا ۹۴۶۹۱

فاروج: ۹۴۸۱۱ تا ۹۴۸۹۱

مانه و سملقان: ۹۴۳۴۱ تا ۹۴۵۵۱

 خوزستان
کد پستی خوزستان
دزفول: ۶۴۶۱۱ تا ۶۴۶۹۱

دشت آزادگان: ۶۴۴۱۱ تا ۶۴۴۹۱

رامهرمز: ۶۳۸۱۱ تا ۶۴۹۶۱

شادگان: ۶۴۳۱۱ تا ۶۴۳۶۱

شوش: ۶۴۷۱۱ تا ۶۴۷۹۱

شوشتر: ۶۴۵۱۱ تا ۶۴۵۹۱

لالی: ۶۴۹۴۱ تا ۶۴۹۴۱

ماهشهر: ۶۳۵۱۱ تا ۶۳۵۸۱

مسجد سلیمان: ۶۴۹۱۱ تا ۶۴۹۹۱

هندیجان: ۶۳۵۹۱ تا ۶۳۵۹۱

 زنجان
کد پستی زنجان
زنجان: ۴۵۱۳۱ تا ۴۵۵۴۱

ابهر: ۴۵۵۱۱ تا ۴۵۷۴۱

ایجرود: ۴۵۳۱۱ تا ۴۵۹۷۱

خدابنده: ۴۵۷۷۱ تا ۴۵۸۹۱

خرمدره: ۴۵۷۱۱ تا ۴۵۷۶۱

ماهنشان: ۴۵۴۱۱ تا ۴۵۴۸۱

طارم: ۴۵۹۱۱ تا ۴۵۹۹۱

 سمنان
کد پستی سمنان
سمنان: ۳۵۱۳۱ تا ۳۵۷۹۱

دامغان: ۳۶۷۱۱ تا ۳۶۹۹۱

شاهرود: ۳۶۱۳۱ تا ۳۶۶۹۱

گرمسار: ۳۵۸۱۱ تا ۳۵۹۹۱

 سیستان و بلوچستان
کد پستی سیستان و بلوچستان
زاهدان: ۹۸۱۳۱ تا ۹۸۴۹۱

ایرانشهر: ۹۹۱۳۱ تا ۹۹۴۹۱

چابهار: ۹۹۷۱۱ تا ۹۹۸۶۱

زابل: ۹۸۵۱۱ تا ۹۸۷۹۱

زابلی: ۹۹۶۶۱ تا ۹۹۶۶۱

سراوان: ۹۹۵۱۱ تا ۹۹۶۹۱

خاش: ۹۸۸۱۱ تا ۹۸۹۹۱

دلگان: ۹۹۴۷۱ تا ۹۹۴۷۱

سرباز: ۹۹۳۱۱ تا ۹۹۳۹۱

نیکشهر: ۹۹۳۳۱ تا ۹۹۹۹۱

 فارس
کد پستی فارس
شیراز: ۷۱۳۳۱ تا ۷۳۴۹۱

آباده: ۷۳۹۱۱ تا ۷۳۹۹۱		
ارسنجان: ۷۳۷۳۱ تا ۷۳۷۶۱

استهبان: ۷۴۴۶۱ تا ۷۴۵۱۹

اقلید: ۷۳۸۱۱ تا ۷۳۸۹۱

بوانات: ۷۳۷۸۱ تا ۷۳۹۷۱		
پاسارگاد: ۷۳۷۴۱ تا ۷۳۷۹۱

جهرم: ۷۴۱۳۱ تا ۷۴۵۹۱		
خرمبید: ۷۳۷۵۱ تا ۷۳۹۶۱

خنج: ۷۴۴۳۱ تا ۷۴۴۳۱		
داراب: ۷۴۱۱۱ تا ۷۴۸۹۱

فراشبند: ۷۴۷۷۱ تا ۷۴۷۸۱		
زرین دشت: ۷۴۸۱۴ تا ۷۴۸۶۱

فیروزآباد: ۷۴۷۱۱ تا ۷۴۷۹۱

سپیدان: ۷۳۶۱۱ تا ۷۳۶۹۱	
کازرون: ۷۳۱۱۱ تا ۷۳۳۹۱

فسا: ۷۴۶۱۱ تا ۷۴۶۹۱	
لامرد: ۷۴۳۴۱ تا ۷۴۴۴۱

قیر و کارزین: ۷۴۷۱۴ تا ۷۴۷۶۱

ممسنی: ۷۳۵۱۱ تا ۷۳۵۹۱

لارستان: ۷۴۳۱۱ تا ۷۴۴۱۹	
نی ریز: ۷۴۹۱۱ تا ۷۴۹۹۱

مرودشت: ۷۳۴۳۱ تا ۷۳۷۷۱			
مهر: ۷۴۴۱۴ تا ۷۴۴۵۱

 قزوین
کد پستی قزوین
قزوین: ۳۴۱۳۱ تا ۳۴۹۸۱

آبیک: ۳۴۴۱۱ تا ۳۴۴۸۱

البرز: ۳۴۱۵۱ تا ۳۴۱۶۱

بوئین زهرا: ۳۴۴۹۱ تا ۳۴۶۹۱

تاکستان: ۳۴۵۶۱ تا ۳۴۹۵۱

 قم
کد پستی قم
قم: ۳۷۱۳۱ تا ۳۷۴۹۱

 کردستان
کد پستی کردستان
سنندج: ۶۶۱۳۱ تا ۶۶۱۹۹

بانه: ۶۶۹۱۱ تا ۶۶۹۹۱

بیجار: ۶۶۵۱۱ تا ۶۶۵۹۱

دیواندره: ۶۶۴۱۱ تا ۶۶۴۹۱

سروآباد: ۶۶۷۷۱ تا ۶۶۷۹۱

سقز: ۶۶۸۱۱ تا ۶۶۸۹۱

قروه: ۶۶۶۱۱ تا ۶۶۶۹۱

کامیاران: ۶۶۳۱۱ تا ۶۶۳۹۱

مریوان: ۶۶۷۱۱ تا ۶۶۷۶۱

 کرمان
کد پستی کرمان
کرمان: ۷۶۱۳۱ تا ۷۷۹۵۱

راور: ۷۶۵۱۱ تا ۷۷۹۹۱

رفسنجان: ۷۷۱۳۱ تا ۷۷۴۹۱

رودبار: ۷۸۸۳۱ تا ۷۸۸۳۱

زرند: ۷۷۶۱۱ تا ۷۷۶۹۱

سیرجان: ۷۸۱۳۱ تا ۷۸۳۹۱

شهر بابک: ۷۷۵۱۱ تا ۷۷۵۹۱

عنبرآباد: ۷۸۷۱۹ تا ۷۸۷۹۱

قلعه گنج: ۷۸۸۴۱ تا ۷۸۹۷۱	
کوهبنان: ۷۷۷۱۱ تا ۷۷۸۹۱

کهنوج: ۷۸۸۱۱ تا ۷۸۸۹۱	
منوجان: ۷۸۸۵۱ تا ۷۸۹۹۱

کرمانشاه
کد پستی کرمانشاه
کرمانشاه: ۶۷۱۳۱ تا ۶۷۸۵۱

کرمانشاه/روانسر: ۶۷۶۸۱ تا ۶۷۶۸۱		
کنگاور: ۶۷۴۱۱ تا ۶۷۴۵۱

گیلانغرب: ۶۷۷۸۱ تا ۶۷۸۹۱

جوانرود: ۶۷۹۸۱ تا ۶۷۹۸۱

قصر شیرین: ۶۷۸۱۱ تا ۶۷۸۶۱

جوانرود/روانسر: ۶۷۹۷۱ تا ۶۷۹۷۱

دالاهو: ۶۷۶۳۱ تا ۶۷۶۷۱

روانسر: ۶۷۷۳۱ تا ۶۷۹۶۱

صحنه: ۶۷۴۶۱ تا ۶۷۵۹۱

سرپل ذهاب: ۶۷۷۱۱ تا ۶۷۷۵۱

سنقر: ۶۷۵۱۱ تا ۶۷۵۷۱

هرسین: ۶۷۳۱۱ تا ۶۷۳۷۱

 کهکیلویه و بویراحمد
کد پستی کهکیلویه و بویراحمر
کهگیلویه: ۷۵۷۱۱ تا ۷۵۷۹۱

بویراحمد: ۷۵۹۱۱ تا ۷۵۹۸۱

دنا: ۷۵۹۴۱ تا ۷۵۹۹۱	
گچساران: ۷۵۸۱۱ تا ۷۵۸۹۱

گلستان
کد پستی گلستان
گرگان: ۴۹۱۳۱ تا ۴۹۳۷۱

آزاد شهر: ۴۹۶۱۱ تا ۴۹۶۷۱

آق قلا: ۴۹۳۱۱ تا ۴۹۳۹۱

ترکمن: ۴۸۹۱۱ تا ۴۸۹۹۱

بندر گز: ۴۸۷۱۱ تا ۴۸۷۹۱

گنبد کاووس: ۴۹۶۹۱ تا ۴۹۷۹۱

رامیان: ۴۹۵۱۱ تا ۴۹۶۸۱

علی آباد: ۴۹۴۱۱ تا ۴۹۴۹۱

کردکوی: ۴۸۸۱۱ تا ۴۸۸۹۱

کلاله: ۴۹۸۵۱ تا ۴۹۹۹۱

مینو دشت: ۴۹۸۱۱ تا ۴۹۸۹۱

گیلان
کد پستی گیلان
لاهیجان: ۴۴۱۳۱ تا ۴۴۳۷۱

سیاهکل: ۴۴۳۱۱ تا ۴۴۳۹۱

شفت: ۴۳۵۴۱ تا ۴۳۵۹۱

صومعه سرا: ۴۳۶۱۱ تا ۴۳۶۹۱

طوالش: ۴۳۷۱۱ تا ۴۳۷۹۱	
فومن: ۴۳۵۱۱ تا ۴۳۵۸۱

لنگرود: ۴۴۷۱۱ تا ۴۴۷۹۱

ماسال: ۴۳۸۱۱ تا ۴۳۸۵۱

لرستان
کد پستی لرستان
خرم آباد: ۶۸۱۳۱ تا ۶۸۸۹۱

ازنا: ۶۸۷۱۱ تا ۶۸۷۳۱

بروجرد: ۶۸۹۷۱ تا ۶۹۱۹۹

الیگودرز: ۶۸۶۱۱ تا ۶۸۶۹۱

کوهدشت: ۶۸۴۱۱ تا ۶۸۴۹۱

سلسله: ۶۸۹۱۱ تا ۶۸۹۶۱

دورود: ۶۸۸۱۱ تا ۶۸۸۵۱	
دلفان: ۶۸۳۱۱ تا ۶۸۳۹۱

پلدختر: ۶۸۵۱۱ تا ۶۸۵۷۱

 مازندران
کد پستی مازندران
ساری: ۴۸۱۳۱ تا ۴۸۴۹۱

آمل: ۴۶۱۳۱ تا ۴۶۳۹۱

بابل: ۴۷۱۳۱ تا ۴۷۵۹۱

بابلسر: ۴۷۴۱۱ تا ۴۷۵۳۱

بهشهر: ۴۸۵۱۱ تا ۴۸۶۹۱

تنکابن: ۴۶۷۱۱ تا ۴۶۸۹۱

جویبار: ۴۷۷۱۱ تا ۴۷۷۷۱

چالوس: ۴۶۶۱۱ تا ۴۶۶۹۱		
رامسر: ۴۶۹۱۱ تا ۴۶۹۹۱

سواد کوه: ۴۷۸۱۱ تا ۴۷۹۹۱

قائم شهر: ۴۷۶۱۱ تا ۴۷۷۹۱	
محمودآباد: ۴۶۳۱۱ تا ۴۶۳۴۱

نکا: ۴۸۳۸۱ تا ۴۸۵۹۱	
نور: ۴۶۴۱۱ تا ۴۶۵۶۱

نوشهر: ۴۶۵۱۱ تا ۴۶۵۹۱

مرکزی
کد پستی مرکزی
اراک: ۳۸۱۳۱ تا ۳۸۵۷۱

آشتیان: ۳۹۶۱۱ تا ۳۹۶۹۱		
تفرش: ۳۹۵۱۱ تا ۳۹۵۹۱

خمین: ۳۸۸۱۱ تا ۳۸۹۹۱		
دلیجان: ۳۷۹۱۱ تا ۳۷۹۹۱

ساوه: ۳۹۱۳۱ تا ۳۹۴۹۱

خنداب: ۳۸۴۱۳ تا ۳۸۴۹۱

زرندیه: ۳۷۷۱۱ تا ۳۹۴۴۱		
شازند: ۳۸۶۱۱ تا ۳۹۹۹۱	
کمیجان: ۳۸۵۱۱ تا ۳۸۵۹۱

محلات: ۳۷۸۱۱ تا ۳۷۸۹۱			
 هرمزگان
کد پستی هرمزگان
بندر عباس: ۷۹۱۳۱ تا ۷۹۶۶۱

ابوموسی: ۷۹۵۹۱ تا ۷۹۵۹۱		
بستک: ۷۹۶۱۱ تا ۷۹۶۹۱

بندر لنگه: ۷۹۴۱۳ تا ۷۹۷۸۱		
جاسک: ۷۹۴۸۱ تا ۷۹۸۹۱

حاجی آباد: ۷۹۳۷۱ تا ۷۹۴۱۱		
رودان: ۷۹۹۱۱ تا ۷۹۹۵۱	
قشم: ۷۹۵۱۱ تا ۷۹۵۸۱

میناب: ۷۹۴۶۱ تا ۷۹۹۹۱			
همدان
کد پستی همدان
همدان: ۶۵۱۳۱ تا ۶۵۶۵۱

اسد آباد: ۶۵۴۱۱ تا ۶۵۴۹۱

بهار: ۶۵۳۱۱ تا ۶۵۳۹۱

تویسرکان: ۶۵۸۱۱ تا ۶۵۸۹۱

رزن: ۶۵۶۶۱ تا ۶۵۶۹۱

کبودر آهنگ: ۶۵۵۱۱ تا ۶۵۵۹۱

ملایر: ۶۵۷۱۱ تا ۶۵۷۹۱	
نهاوند: ۶۵۹۱۱ تا ۶۵۹۹۱

یزد
کد پستی یزد
یزد: ۸۹۱۳۱ تا ۸۹۴۹۳

ابرکوه: ۸۹۱۳۱ تا ۸۹۳۹۱		
اردکان: ۸۹۵۱۱ تا ۸۹۶۹۱

بافق: ۸۹۷۱۱ تا ۸۹۷۹۱		
تفت: ۸۹۹۱۱ تا ۸۹۹۹۱

خاتم: ۸۹۸۷۱ تا ۸۹۸۹۱

صدوق: ۸۹۴۱۱ تا ۸۹۴۸۱	
طبس: ۹۷۹۱۱ تا ۹۷۹۹۱

مهریز: ۸۹۸۱۱ تا ۸۹۸۶۱	
میبد: ۸۹۶۱۱ تا ۸۹۶۸۱

 
 */