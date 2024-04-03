import { Point } from "./point";

class Triangle {

    //Atributos
    private vertex1: Point;
    private vertex2: Point;
    private vertex3: Point;

    //Costructor
    constructor (vertex1: Point, vertex2: Point, vertex3: Point){
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }

    //getter setter
    public getV1(): Point{
        return this.vertex1;
    }
    public getV2(): Point{
        return this.vertex2;
    }
    public getV3(): Point{
        return this.vertex3;
    }

    public setV1(newV1: Point):void{
        this.vertex1 = newV1;
    }
    public setV2(newV2: Point):void{
        this.vertex2 = newV2;
    }
    public setV3(newV3: Point):void{
        this.vertex3 = newV3;
    }

    //Metodos
    public calculateLengthSides(): number[]{
        let a = this.vertex1.calculateDistance(this.vertex2)
        let b = this.vertex2.calculateDistance(this.vertex3)
        let c = this.vertex3.calculateDistance(this.vertex1)

        return [a, b, c];
    }
}

let vrtx1 = new Point (0, 0)
let vrtx2 = new Point (0, 8)
let vrtx3 = new Point (-1, 3)

let myTriangle = new Triangle(vrtx1, vrtx2, vrtx3);
console.log(myTriangle.calculateLengthSides());
