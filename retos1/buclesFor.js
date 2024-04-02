"use strict";
//Me imprime 0
//¿Me podeis explicar motivo? 
/*function evenNumbers(num){
    for (let i = 0; i <= num; i++){
        if (i % 2 == 0){
            return i;
        }
    }
}
console.log(evenNumbers(19));*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = void 0;
//2
function evenNumbers(num) {
    for (var i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
evenNumbers(19);
//3
function myRevert(myArr) {
    var newArr = [];
    console.log(myArr.length);
    for (var i = myArr.length - 1; i >= 0; i--) {
        newArr.push(myArr[i]);
    }
    return newArr;
}
console.log(myRevert(["Jesus", "Munnoz", "Post"]));
//4
function isRainbow(color) {
    var rainbow = ["rojo", "naranja", "amarillo", "verde", "añil", "azul", "violeta"];
    var yesRB = [];
    var noRB = [];
    for (var i = 0; i < rainbow.length; i++) {
        for (var j = 0; j < color.length; j++) {
            if (rainbow[i] == color[j]) {
                yesRB.push(color[j]);
            }
            //No imprime el primero pero me Imprime todos los colores  ¿?
            else if (!color.indexOf(rainbow[i])) {
                noRB.push(color[j]);
            }
        }
    }
    return ("Los colores del arco iris son ".concat(yesRB, ".\nLos colores que no se encuentran en el arco iris son ").concat(noRB, "."));
}
console.log(isRainbow(["naranja", "cian", "magenta", "rojo", "madera", "burdeos", "camel"]));
//5
function add(myWords) {
    var contador = 0;
    for (var i = 0; i < myWords.length; i++) {
        contador += myWords[i].length;
    }
    return contador;
}
exports.add = add;
console.log(add(["casa", "palo", "mesa", "pala"]));
