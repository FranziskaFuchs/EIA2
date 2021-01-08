namespace Skipiste_L09{
    console.log("Snowflake");

    export class Snowflake {
        position: Vektor;
        velocity: Vektor;

        constructor(_position: Vektor) {
            if (_position)
                this.position = _position;
            else {
                this.position = new Vektor(800,600);
                this.position.random(800, 600, 0, 0);
            }
        }
        
        move(_timeslice: number): void {
          
            let offset: Vektor = new Vektor(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);

            this.position.add(offset);
            if(this.position.x<0)
                (this.position.x += crc2.canvas.width);
            if(this.position.y < 0)
                (this.position.y += crc2.canvas.width);
            if(this.position.x > crc2.canvas.width)
                (this.position.x -= crc2.canvas.width);
            if(this.position.y < crc2.canvas.width)
                (this.position.y -= crc2.canvas.width);
            
        }
        
        draw(): void {
            crc2.save();
            crc2.fillStyle = "white";
            crc2.beginPath();
        
            crc2.arc(this.position.x, this.position.y, 1, 0, 2 * Math.PI);
            crc2.closePath;
            crc2.fill();
            crc2.restore;
        }
    }
}