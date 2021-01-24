namespace L11_Skipiste {

    export abstract class Moveable {

    public position: Vector;
    public speed: Vector;
    public x: number;
    public y: number;
    public task: TASK;
    public hitRadius: number;
    public speed2: number;
    

    constructor( _position?: Vector) { 
        console.log("moveable constructor");

        if (_position)
            this.position = _position;
        else
            this.position = new Vector (0, 0); 
            
        this.speed = new Vector (0, 0);
       
    }

    public move(_timeslice: number): void {
        
        let offset: Vector = this.speed.copy();
        offset.scale(_timeslice); // offset wird um den _timeslice skaliert, wir erhalten die verschiebung
        this.position.add(offset); //diese verscheibung wird mit der position addiert
    
        if (this.position.x < 0 )
            this.position.x += crc2.canvas.width;
        if (this.position.y < 0 )
            this.position.y += crc2.canvas.height;
        if (this.position.x > crc2.canvas.width)
            this.position.x -= crc2.canvas.width;
        if (this.position.y > crc2.canvas.height)
            this.position.x -= crc2.canvas.height;
        
    }

    public abstract draw(): void;
       

    }
}