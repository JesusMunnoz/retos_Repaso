import { isEven } from "./condicionales";
import { add } from "./buclesFor";

console.log(isEven(add(["casa", "coche", "ciudad", "cesta"])));
console.log(isEven(add(["barco", "baca", "bicicleta", "balon", "bisiesto", "brasil"])));
console.log(isEven(add(["venezuela", "veneno", "voltaje"])));

//-------------------------------------//

/* 
No se porque, pero me está sacando por la terminal los resultados de los archivos "condicionales.ts" y "bucles.ts"
justo los archivos de donde hago la importacion 
¿Sabeis qué puede estar pasando?
*/
