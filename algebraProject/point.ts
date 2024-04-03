export class Point {
    //Atributos
    private x: number;
    private y: number;

    //getters & setters
    public getX(): number{
        return this.x;
    }
    public getY(): number{
        return this.y;
    }

    public setX(newX: number):void{
        this.x = newX;
    }
    public setY(newY: number):void{
        this.y = newY;
    }

    //Constructor
    constructor (x: number, y: number){
        this.x = x;
        this.y = y
    }

    //Metodos
    public toString():string{
        return `(${this.x},${this.y})`
    }

    public distanceTolOrigin()/*:number*/{  // si pongo number me da error 
        let h : number;
        if (this.x == 0 && this.y == 0){
            return  0;
        }
        else if (this.x == 0){
            return  this.y;
        }
        else if (this.y == 0){
            return this.x;
        }
        else if(this.x != 0 && this.y != 0){
            h = Math.sqrt(Math.pow(this.x, 2)+Math.pow(this.y, 2))
            return h;
        }
    }
    public calculateDistance(anotherPoint: Point){
        let d : number;
        d = Math.sqrt(Math.pow((this.x - anotherPoint.getX()), 2)+Math.pow((this.y - anotherPoint.getY()), 2));
        return d;
    }

    public calcularQuadrant()/*: number*/{
        let quadrant: number;
        if (this.x == 0 || this.y == 0){
            quadrant = 0;
            return quadrant;
        }
        else if (this.x > 0 && this.y > 0){
            quadrant = 1;
            return quadrant;
        }
        else if (this.x < 0 && this.y > 0){
            quadrant = 2;
            return quadrant;
        }
        else if (this.x < 0 && this.y < 0){
            quadrant = 3;
            return quadrant;
        }
        else if (this.x > 0 && this.y < 0){
            quadrant = 4;
            return quadrant;
        }
    }

    

}

/*let myPoint : Point = new Point (7,3);
console.log(myPoint.toString());
console.log(myPoint.distanceTolOrigin());

let anotherPoint : Point = new Point (-4, 8);
console.log(anotherPoint.toString());
console.log(myPoint.calculateDistance(anotherPoint));

console.log(myPoint.calcularQuadrant());*/
