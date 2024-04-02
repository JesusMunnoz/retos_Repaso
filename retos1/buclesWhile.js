//2
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
//3
function startWithM(myNames) {
    var i = 0;
    while (i < myNames.length) {
        if (myNames[i][0] !== "M") {
            return 1;
        }
    }
    i++;
    return 2;
}
console.log(startWithM(["Maria", "Mario", "Mercedes", "Manuel"]));
console.log(startWithM(["Maria", "Mario", "Carla", "Manuel"]));
