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

//2
function evenNumbers(num): void{
    for (let i = 0; i <= num; i++){
        if (i % 2 == 0){
            console.log(i);
        }
    }
}
evenNumbers(19);

//3
function myRevert(myArr: string[]): string[]{
    let newArr : string[] = [];
    console.log(myArr.length);
    
    for (let i = myArr.length - 1; i >= 0; i--){
        newArr.push(myArr[i]);
    }
    return newArr;
}
console.log(myRevert(["Jesus", "Munnoz", "Post"]));

//4
function isRainbow(color: string[]):string{
    let rainbow : string[] = ["rojo", "naranja", "amarillo", "verde", "añil", "azul", "violeta"];
    let yesRB : string[] = [];
    let noRB : string[] = [];
    for (let i = 0; i < rainbow.length; i++){
        
        for (let j = 0; j < color.length; j++){
            if (rainbow[i] == color[j]){
                yesRB.push(color[j]);
            }
            //No imprime el primero pero me Imprime todos los colores  ¿?
            else if (!color.indexOf(rainbow[i])) {
                noRB.push(color[j]);
            }
            
        }
    }
    return(`Los colores del arco iris son ${yesRB}.\nLos colores que no se encuentran en el arco iris son ${noRB}.`);
    
}
console.log(isRainbow(["naranja", "cian", "magenta", "rojo", "madera", "burdeos", "camel"]));

//5
export function add (myWords: string[]) : number{
    let contador : number = 0;
    for (let i = 0; i < myWords.length; i++){
        contador += myWords[i].length;
    }
    return contador;
}
console.log(add(["casa", "palo", "mesa", "pala"]));