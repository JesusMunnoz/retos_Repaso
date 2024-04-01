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
function evenNumbers(num) {
    for (var i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
evenNumbers(19);
function myRevert(myArr) {
    var newArr = [];
    console.log(myArr.length);
    for (var i = myArr.length - 1; i >= 0; i--) {
        newArr.push(myArr[i]);
    }
    return newArr;
}
console.log(myRevert(["Jesus", "Munnoz", "Post"]));
function isRainbow(color) {
    var rainbow = ["rojo", "naranja", "ammarillo", "verde", "añil", "azul", "violeta"];
    var yesRB = [];
    var noRB = [];
    for (var i = 0; i < rainbow.length; i++) {
        for (var j = 0; j < color.length; j++) {
            if (rainbow[i] == color[j]) {
                yesRB.push(color[j]);
            }
            //Me Imprime todos los colores
            else if (!color.indexOf(rainbow[i])) {
                noRB.push(color[j]);
            }
        }
    }
    return ("Los colores del arco iris son ".concat(yesRB, ".\nLos colores que no se encuentran en el arco iris son ").concat(noRB, "."));
}
console.log(isRainbow(["naranja", "cian", "magenta", "rojo"]));
function hasEven(myNums) {
    var i = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 == 0) {
            console.log("el numero en la posición " + i + " es par");
        }
        i++;
    }
}
hasEven([1, 2, 3, 4, 5, 6, 8, 11, 14]);
