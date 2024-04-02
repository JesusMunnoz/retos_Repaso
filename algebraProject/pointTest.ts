import { Point } from "./point";

let myPoint : Point = new Point (4,5);
console.log(myPoint.toString());
console.log(myPoint.distanceTolOrigin());

/*let myPoint1 : Point = new Point (0,3);
console.log(myPoint1.toString());
console.log(myPoint1.distanceTolOrigin());

let myPoint2 : Point = new Point (7,0);
console.log(myPoint2.toString());
console.log(myPoint2.distanceTolOrigin());*/


let anotherPoint : Point = new Point (-4, 8);
console.log(anotherPoint.toString());
console.log(myPoint.calculateDistance(anotherPoint));