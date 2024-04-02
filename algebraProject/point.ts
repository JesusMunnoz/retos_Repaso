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

}