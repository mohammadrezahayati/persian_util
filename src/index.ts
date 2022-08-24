// made by @mohammadrezahayati


//This Function get a persian @number and change it to english @number and return it.
export const ChangePersianNumberToEnglish =(number : string) : string | undefined =>{
    if(!number) return;
    const res =  number.replace(/[۰-۹]/g, (d: string) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString())
    return res;
}

//This function get a persian @number and check it if valid or not and return boolean
export const CheckPersianPhone =(number:string): boolean | undefined =>{
    if(!number) return;
    const numberRegex = /^(\+98|0098|98|0)?9\d{9}$/;
    const res = numberRegex.test(number);
    return res;
}

//This function get an @array and @keyword, search inside the array and if find something return it
// export const SearchOnPersian = <T ,K, R>(items : T , keyword :K ) : R => {
//     return "" as R;
// }

console.log(ChangePersianNumberToEnglish("۰۱۲۳۴۵۶۷۸۹"))

//Todo: create function to find sheba logo;
//Todo: create function to find card logo;
//Todo: create function to find card logo;

