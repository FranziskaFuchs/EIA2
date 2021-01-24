namespace L11_Skipiste {
    export class Tree {

        position: Vector;

        constructor() {
            this.position = new Vector(100, 600);
        }


        draw(): void {

            //Großer Baum links
            crc2.beginPath();
            crc2.moveTo(100, 600);
            crc2.lineTo(135, 425);
            crc2.lineTo(170, 600);
            crc2.closePath();
    
            crc2.fillStyle = "darkgreen";
            crc2.fill();
            crc2.save();
            crc2.restore();
        }
    }
}
