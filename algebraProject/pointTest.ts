import { Point } from "./point";

// -- 1 --
let myPoint : Point = new Point (4,5);
console.log(myPoint.toString());
console.log(myPoint.distanceTolOrigin());

let myPoint1 : Point = new Point (-8,3);
console.log(myPoint1.toString());
console.log(myPoint1.distanceTolOrigin());

let myPoint2 : Point = new Point (-7,-7);
console.log(myPoint2.toString());
console.log(myPoint2.distanceTolOrigin());

let myPoint3 : Point = new Point (4,-2);
console.log(myPoint3.toString());
console.log(myPoint3.distanceTolOrigin());

let myPoint4 : Point = new Point (0,-2);
console.log(myPoint4.toString());
console.log(myPoint4.distanceTolOrigin());

let myPoint5 : Point = new Point (4,0);
console.log(myPoint5.toString());
console.log(myPoint5.distanceTolOrigin());

let myPoint6 : Point = new Point (0,0);
console.log(myPoint6.toString());
console.log(myPoint6.distanceTolOrigin());


// -- 2 --
let anotherPoint : Point = new Point (-4, 8);
console.log(anotherPoint.toString());
console.log(myPoint.calculateDistance(anotherPoint));

// -- 3 --
console.log(myPoint.calcularQuadrant());
console.log(myPoint1.calcularQuadrant());
console.log(myPoint2.calcularQuadrant());
console.log(myPoint3.calcularQuadrant());
console.log(myPoint4.calcularQuadrant());
console.log(myPoint5.calcularQuadrant());
console.log(myPoint6.calcularQuadrant());
console.log(anotherPoint.calcularQuadrant());

// -- 4 -- 
console.log("");
let p1 : Point = new Point (2,-4);
let p2 : Point = new Point (8,5);
let p3 : Point = new Point (-7,-2);
console.log(myPoint.calculateNearest([p1, p2, p3]));
let arr: Point [] = [p1, p2, p3];
console.log(myPoint.calculateNearest(arr));