/*
Aries 21 03 - 19 04
Tauro 20 04 - 20 05
Geminis 21 05 - 20 06
Cancer 21 06 - 22 07
Leo 23 07 - 22 08
Virgo 23 08 - 22 09
Libra 23 09 - 24 10
Escorpio 25 10 - 21 11
Sagitario 22 11 - 21 12
Capricornio 22 12 - 19 01
Acuario 20 01 - 18 02
Piscis 19 02 - 20 03
*/

//2
function zodiac (day:number, month:number){
    if ((day >= 21 && month == 3) || (day <= 19 && month == 4)){
        return "Aries";
    }
    else if ((day >= 20 && month == 4) || (day <= 20 && month == 5)){
        return "Tauro";
    }
    else if ((day >= 21 && month == 5) || (day <= 20 && month == 6)){
        return "Geminis";
    }
    else if ((day >= 21 && month == 6) || (day <= 22 && month == 7)){
        return "Cancer";
    }
    else if ((day >= 23 && month == 7) || (day <= 22 && month == 8)){
        return "Leo";
    }
    else if ((day >= 23 && month == 8) || (day <= 22 && month == 9)){
        return "Virgo";
    }
    else if ((day >= 23 && month == 9) || (day <= 24 && month == 10)){
        return "Libra";
    }
    else if ((day >= 25 && month == 10) || (day <= 21 && month == 11)){
        return "Escorpio";
    }
    else if ((day >= 22 && month == 11) || (day <= 21 && month == 12)){
        return "Sagitario";
    }
    else if ((day >= 22 && month == 12) || (day <= 19 && month == 1)){
        return "Capricornio";
    }
    else if ((day >= 20 && month == 1) || (day <= 18 && month == 2)){
        return "Acuario";
    }
    else if ((day >= 19 && month == 2) || (day <= 20 && month == 3)){
        return "Piscis";
    }
}

console.log(zodiac(14, 6));

//3
function continent(country){
    if ((country == "Spain")||(country == "England")||(country == "Ireland")||(country == "Portugal")||(country == "Andorra")){
        return "Europe";
    }
    else if ((country == "Republic of India")||(country == "People's Republic of China")||(country == "Republic of Corea")||(country == "Japan")||(country == "Israel")){
        return "Asia";
    }
    else if ((country == "Republic of Cuba")||(country == "Jamaica")||(country == "United Mexican States")||(country == "United States")||(country == "Canada")){
        return "North America";
    }
    else if ((country == "Argentina")||(country == "Federative Republic of Brazil")||(country == "Peru")||(country == "Bolivarian Republic of Venezuela")||(country == "Republic of Colombia")){
        return "South America";
    }
    else if ((country == "Fiji")||(country == "New Zeland")||(country == "Federated States of Micronesia")||(country == "Papua")||(country == "Samoa")){
        return "Oceania";
    }
    else if ((country == "Algeria")||(country == "Angola")||(country == "Benin")||(country == "Botswana")||(country == "Burkina Faso")){
        return "Africa";
    }
}

console.log(continent("Ireland"));
console.log(continent("Japan"));
console.log(continent("Argentina"));
console.log(continent("Papua"));
console.log(continent("Jamaica"));
console.log(continent("Angola"));

//4
export function isEven(number) {
    if (number % 2 == 0 ){
        return `El numero ${number} es par.`;
    }
    else{
        return `El numero ${number} es impar.`;
    }
}

console.log(isEven(6));
console.log(isEven(3));
