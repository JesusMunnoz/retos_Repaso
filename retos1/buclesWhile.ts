//2
function hasEven(myNums: number[]) {
    let i = 0;
    while (i < myNums.length){
        if (myNums[i] % 2 == 0 ){
            console.log("el numero en la posición " + i + " es par");
        }
        i++;
    }
}
hasEven([1, 2, 3, 4, 5, 6, 8, 11, 14]);

//3 ---- No veo resultado y la terminal se queda pillada
function startWithM (myNames: string[]) {
    let i = 0;
    while (i < myNames.length){
        if (myNames[i][0] !== "M"){
            return false;
        }
    }
    i++
    return true;
}
console.log(startWithM(["Maria", "Mario", "Mercedes", "Manuel"]));
console.log(startWithM(["Maria", "Mario", "Carla", "Manuel"]));
