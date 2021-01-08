namespace Skipiste_L09{
    console.log("Peopel");

    export class Peopel{

        move(_timeslice:number): void {
            console.log("Peopel Move");
        }

        draw(): void{
            let x: number = Math.random() * 500;
            let y: number = (Math.random() * 300) + 200;



            if (x > 450) {
                y = (Math.random() * 650) + 500;
            }

            let color: string[] = ["#ff0000", "#04B404", "#0000ff", "#DF7401", "#04B4AE", "#ff00bf"];
            let randomColor: string = color[Math.floor(Math.random() * color.length)];
            let radius: number = 10;

            crc2.save();
            crc2.translate(x, y);
            crc2.rotate(20 * Math.PI / 180);

            crc2.beginPath();
            crc2.arc(0, 0, radius, 0, 2 * Math.PI);
            crc2.fillStyle = randomColor;
            crc2.fill();
    
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(20, 50);
            crc2.lineTo(-20, 50);
            crc2.closePath();
            crc2.fillStyle = randomColor;
            crc2.fill();
    
            crc2.translate(0, 50);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, 25);
            crc2.stroke();
    
            crc2.translate(0, 25);
            crc2.beginPath();
            crc2.moveTo(-25, 0);
            crc2.lineTo(25, 0);
            crc2.lineTo(45, -20);
            crc2.stroke();
            crc2.restore();
        }
    }
}
  