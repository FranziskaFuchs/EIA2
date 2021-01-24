namespace L11_Skipiste {

    export class Snowflake extends Moveable { 

        public draw(): void {
           // console.log("draw Snowflake");
            let radiusSnowflake: number = Math.random() * 2.5 + 1;
            crc2.save();
            crc2.translate(this.x, this.y);
            crc2.beginPath();     
            crc2.arc(this.x, this.y, radiusSnowflake, 0, Math.PI * 2, false);
            crc2.fillStyle = "white";
            crc2.fill();

            crc2.restore();
        }

        public move(): void {
           // console.log("move Snowflake");

        if (this.y >= 800) {
            this.y = 0;
        }

        this.y += Math.random() * 1;
     }

    }

}

 //new position geben mit y bsp. -10  mit if schleife
