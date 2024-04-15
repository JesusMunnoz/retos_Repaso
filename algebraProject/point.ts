export class Point {
    //Atributos
    private x: number;
    private y: number;

    //Constructor
    constructor (x: number, y: number){
        this.x = x;
        this.y = y
    }

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

    //Metodos

    // -- 1 -- 
    public toString():string{
        return `(${this.x},${this.y})`
    }

    // -- 2.1 -- 
    public distanceTolOrigin():number{  
        let h : number;
        let distancia: number;
        distancia = 0;
        if (this.x == 0 && this.y == 0){
            distancia  = 0;
        }
        else if (this.x == 0){
            distancia  = this.y;
        }
        else if (this.y == 0){
            distancia = this.x;
        }
        else if(this.x != 0 && this.y != 0){
            h = Math.sqrt(Math.pow(this.getX(), 2)+Math.pow(this.getY(), 2))
            distancia = h;
        }
        return distancia;
    }

    // -- 2.2 -- 
    public calculateDistance(anotherPoint: Point){
        let d : number;
        d = Math.sqrt(Math.pow((this.x - anotherPoint.getX()), 2)+Math.pow((this.y - anotherPoint.getY()), 2));
        return d;
    }
    

    // -- 3 -- 
    public calcularQuadrant(): number{
        let quadrant: number;
        quadrant = 0;
        if (this.x == 0 || this.y == 0){
            quadrant = 0;
        }
        else if (this.x > 0 && this.y > 0){
            quadrant = 1;
        }
        else if (this.x < 0 && this.y > 0){
            quadrant = 2;
        }
        else if (this.x < 0 && this.y < 0){
            quadrant = 3;
        }
        else if (this.x > 0 && this.y < 0){
            quadrant = 4;
        }
        return quadrant;
    }

    // -- 4 -- 
    public calculateNearest(points: Point[]): Point{
        
        let closerPoint : Point = points[0];
        let lowerDistance : number = this.calculateDistance(closerPoint);

        for (let i = 0; i < points.length; i++){
            let currentDistance: number;
            currentDistance = this.calculateDistance(points[i]);

            if (currentDistance < lowerDistance){
                closerPoint = points[i];
                lowerDistance = currentDistance;
            }
        }
        return closerPoint;
    }
}

/*let myPoint : Point = new Point (7,3);
console.log(myPoint.toString());
console.log(myPoint.distanceTolOrigin());

let anotherPoint : Point = new Point (-4, 8);
console.log(anotherPoint.toString());
console.log(myPoint.calculateDistance(anotherPoint));

console.log(myPoint.calcularQuadrant());*/

//4
/*console.log("");

let p1 : Point = new Point (2,-4);
let p2 : Point = new Point (8,5);
let p3 : Point = new Point (-7,-2);
//console.log(myPoint.calculateNearest([p1, p2, p3]));
let arr: Point [] = [p1, p2, p3];
console.log(myPoint.calculateNearest(arr));*/