
# Persian Util

### A utility package for the Persian programmer community

[![npm version](https://img.shields.io/npm/v/persian_util.svg?style=flat-square)](https://www.npmjs.org/package/persian_util)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=persian_util&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=persian_util)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/persian_util?style=flat-square)](https://bundlephobia.com/package/persian_util@latest)
[![npm downloads](https://img.shields.io/npm/dm/persian_util.svg?style=flat-square)](https://npm-stat.com/charts.html?package=persian_util)
[![code helpers](https://www.codetriage.com/mohammadrezahayati/persian_util/badges/users.svg)](https://www.codetriage.com/persian_util/persian_util)
[![Known Vulnerabilities](https://snyk.io/test/npm/persian_util/badge.svg)](https://snyk.io/test/npm/persian_util)
[![jsDeliver](https://data.jsdelivr.com/v1/package/npm/persian_util/badge)](https://www.jsdelivr.com/package/npm/persian_util)

# Usage/Examples

Once the package is installed, you can import the library using import or require approach:

```javascript
import { parse,types,validation,constants } from 'persian_util';
```
```javascript
const utils = require('persian_util');
```

# Parser :

You can parse Numbers and banking card numbers and anything until this time I added to this package

## Banking :
checked if the card number is valid and returned it to right format
```javascript
import { parse } from 'persian_util';

parse.CardNumberParse("1111-2222-3333-4444")// -> return -> "1111222233334444"
parse.CardNumberParse("1111 2222 3333 4444")// -> return -> "1111222233334444"
parse.CardNumberParse("۱۱۱۱.۲۲۲۲.۳۳۳۳.۴۴۴۴")// -> return -> "1111222233334444"
```
## Number :
Parse the number to anything you want

### English To Persian :
Parse the English number to Persian number

```javascript
import { parse } from 'persian_util';

parse.En_To_Fa("09123456789")// -> return -> "۰۹۱۲۳۴۵۶۷۸۹"
```
### Persian To English :
Parse the Persian number to English number

```javascript
import { parse } from 'persian_util';

parse.Fa_To_En("۰۹۱۲۳۴۵۶۷۸۹")// -> return -> "09123456789"

parse.Fa_To_En("۱۱۱.۱۱۱.۱۱۱.۱۱۱")// -> return -> "111.111.111.111"
```
### Rial To Toman :
Parse the Persian Rial To Toman

```javascript
import { parse } from 'persian_util';

parse.Rial_To_Toman(10564523)// -> return -> "1056452"
```
### Rial To Toman :
Parse the Persian Rial To Toman

```javascript
import { parse } from 'persian_util';

parse.Toman_To_Rial(10564523)// -> return -> 105645230
```

### Add Commas:
Added commas to our number and you can use it for showing price

```javascript
import { parse } from 'persian_util';

parse.Add_Commas("30001000")// -> return -> "30,001,000"
```

### Remove Commas:
Remove commas of our number and return it to the right format

```javascript
import { parse } from 'persian_util';

parse.Remove_Commas("30,001,000")// -> return -> "30001000"
```

# Validation :

You can validate your string, postalCode, idNumber,... and anything until this time I added to this package

## Banking :
Checking banking thing

### Check Card Number :
Check card number of user, If it's valid return true otherwise return false
```javascript
import { validation } from 'persian_util';

validation.CheckCardNumber("6037 9918 3333 4444")// -> return -> true
validation.CheckCardNumber("5859831133334444")// -> return -> true
validation.CheckCardNumber("5022-2910-3333-4444")// -> return -> true
```
### Bank Card name :
Check card number of user, If it's valid return name of card bank
```javascript
import { validation } from 'persian_util';

validation.CardBank("5022293345678976")// -> return -> "پاسارگاد"
```
## Id Number :
Checking Id Number

### Find Id Number  :
Check the Id Number of user, If it's valid return province and city of user
```javascript
import { validation } from 'persian_util';

validation.IdNumberFind("194")// -> return -> { province: "خوزستان", city: "بندرماهشهر" }
```
### Check Id Number :
Check Id Number of user, If it's valid return true otherwise return false
```javascript
import { validation } from 'persian_util';

validation.CheckIdNumber("۱۲۳۴۵۶۷۸۹0")// -> return -> false
validation.CheckIdNumber("123۴۶۷۱۲11")// -> return -> false
validation.CheckIdNumber("0054725112")// -> return -> false
```
## IP :
Checking IP of user\
\
spacial thanks for http://ip-api.com , I using api of this website for checking ip address info

### Check IP Information :
Check the IP of user, If it's valid return info of user IP
```javascript
import { validation } from 'persian_util';

const handler = async () => {
    const api = await new validation.IP();
    const res = await api.getIpInfo("137.184.82.151");
    return res;
}

/* return ->  
{
    "status": "success",
    "country": "United States",
    "countryCode": "US",
    "region": "CA",
    "regionName": "California",
    "city": "Santa Clara",
    "zip": "95054",
    "lat": 37.3931,
    "lon": -121.962,
    "timezone": "America/Los_Angeles",
    "isp": "DigitalOcean, LLC",
    "org": "DigitalOcean, LLC",
    "as": "AS14061 DigitalOcean, LLC",
    "query": "137.184.82.151"
}
 */
```
## MAC :
Checking MAC of user\
\
spacial thanks for https://www.macvendorlookup.com , I using api of this website for checking MAC address info

### Check MAC Information :
Check the MAC of user, If it's valid return info of user MAC
```javascript
import { validation } from 'persian_util';

const handler = async () => {
    const api = await new validation.MAC();
    const res = await api.getMacInfo("00:23:AB:7B:58:99");
    return res
}

/* return ->  
{
    "startHex": "0023AB000000",
    "endHex": "0023ABFFFFFF",
    "startDec": "153192759296",
    "endDec": "153209536511",
    "company": "CISCO SYSTEMS, INC.",
    "addressL1": "170 W. TASMAN DRIVE",
    "addressL2": "M/S SJA-2",
    "addressL3": "SAN JOSE CA 95134-1706",
    "country": "UNITED STATES",
    "type": "MA-L"
}
 */
```

## Phone Number :
Checking phoneNumber of user

### Operator Check :
Check the operator of user phoneNumber, If it's valid return true otherwise return false
```javascript
import { validation } from 'persian_util';

validation.isMCI("989113456787")// -> return -> true;
validation.sMTN("+989333456787")// -> return -> true;
validation.isMCI("00989163456787")// -> return -> true;
validation.isRightel("09213456787")// -> return -> true;
```
## Postal Code :
Checking postalCode of user

### Find Postal Code :
Check PostalCode of user, If it's valid return province and city of postalCode
```javascript
import { validation } from 'persian_util';

validation.PostalCodeFind("63511")

/* return ->  
{
    province: "خوزستان", city: "ماهشهر"
}
 */
```

## String :
Checking string of user

### Word Count :
Check the string of user, return number of each word count
```javascript
import { validation } from 'persian_util';

const words = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const res = validation.WordCount(words);
/* return ->  
{
 "1500s": 1, "1960s": 1, "Aldus": 1, "Ipsum": 4, "It": 2, "Letraset": 1, "Lorem": 4, "PageMaker": 1, "a": 2, "also": 1, "an": 1, "and": 3, "been": 1, "book": 1, "but": 1, "centuries": 1, "containing": 1, "desktop": 1, "dummy": 2, "electronic": 1, "essentially": 1, "ever": 1, "five": 1, "galley": 1, "has": 2, "in": 1, "including": 1, "industry": 2, "into": 1, "is": 1, "it": 1, "leap": 1, "like": 1, "make": 1, "more": 1, "not": 1, "of": 4, "only": 1, "passages": 1, "popularised": 1, "printer": 1, "printing": 1, "publishing": 1, "recently": 1, "release": 1, "remaining": 1, "s": 1, "scrambled": 1, "sheets": 1, "simply": 1, "since": 1, "software": 1, "specimen": 1, "standard": 1, "survived": 1, "text": 2, "the": 6, "to": 1, "took": 1, "type": 2, "typesetting": 2, "unchanged": 1, "unknown": 1, "versions": 1, "was": 1, "when": 1, "with": 2
}
 */
```

### Word Count :
Check the string of user, return number of each letter count
```javascript
import { validation } from 'persian_util';

const letters = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
const res = validation.letterCount(letters);
/* return ->  
{ "0": 3, "1": 2, "5": 1, "6": 1, "9": 1, "A": 1, "I": 6, "L": 5, "M": 1, "P": 1, "a": 28, "b": 5, "c": 10, "d": 16, "e": 59, "f": 6, "g": 11, "h": 14, "i": 32, "k": 7, "l": 17, "m": 18, "n": 38, "o": 25, "p": 18, "r": 24, "s": 39, "t": 43, "u": 17, "v": 5, "w": 6, "x": 2, "y": 13 }
 */
```

### Persian letter spacing :
Check the string of user, return the string of removed half space from sentence
```javascript
import { validation } from 'persian_util';

const sentence = "متن دلخواه خود را می نویسم"
const res = validation.PersianLetterSpacing(sentence);
// return ->  "متن دلخواه خود را می‌نویسم"
 */
```

### Remove Spaces :
Check the string of user, return the remove all space on text
```javascript
import { validation } from 'persian_util';

validation.RemoveSpace("the  star wa rrrr ssss  !")// -> return -> "thestarwarrrrssss!");
 */
```


# Error Handling :
you can use this class to handle your error 

## ERR
Is an class to handle your method to your expected value , error and message

```javascript
Err("your method" , 
    "expected return value" , 
    "your error function and its optional" ,
   " your message to return when has a error and its optional")
```
type of error function must be :( RangeError | EvalError | ReferenceError | SyntaxError | URIError | Error | undefined )

```javascript
import { Err,validation } from 'persian_util';
    const error = new Err(validation.CardBank('5022291044444444'),"پاسارگاد", SyntaxError(), "your message");
    error.getError()  //if you have no error return false otherwise return object of your expected error

    // if you don't wanna to pass message or error function just need leave it empty
    const error = new Err(validation.CardBank('5022291044444444'),"پاسارگاد");
    error.getError()  //if you have no error return false otherwise return object of your expected error
   
   // if you don't wanna to pass error function but need the message to return you need to pass undefined to error function
    const error = new Err(validation.CardBank('5022291044444444'),"پاسارگاد" , undefined , "your message");
    error.getError()  //if you have no error return false otherwise return object of your expected error
 */
```



