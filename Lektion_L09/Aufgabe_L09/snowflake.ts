namespace Skipiste_L09{
    console.log("Snowflake");

    export class Snowflake {
        position: Vektor;
        velocity: Vektor;
        
        move(_timeslice: number): void {
           //console.log(snowflake);
            
        }
        
        draw(): void {
            let x: number = Math.random() * window.innerWidth;
            let y: number = Math.random() * window.innerHeight;
            let radiusSnowflake: number = Math.random() * 2.5 + 1;
            crc2.beginPath();
            crc2.arc(x, y, radiusSnowflake, 0, Math.PI * 2, false);
            crc2.fillStyle = "white";
            crc.fill();
        }
    }
}