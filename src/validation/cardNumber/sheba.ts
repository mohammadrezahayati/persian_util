
export const ShebaCheck = () => {
    let inputString = "I'm John, or johnny, but I prefer john.";
    let name = "John";
    let re = new RegExp(`"/\d{2}(${name})\d+/g"`, "gi");
    console.log(inputString.replace(re, "Jack"));
}