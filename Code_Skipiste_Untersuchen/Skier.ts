namespace L11_Skipiste {
    export class Skier extends Moveable { 
        
        public isHit: boolean;
        private color: string [];
        private randomColor: string;
        private skin: string;

        
        constructor(_y: number, _position?: Vector) {
            super(_position);
            this.y = _y;
            this.position = new Vector (0, _y); //Startposition 
            this.speed = new Vector (110, 200); 
            this.color = [] = ["#f4f72f", "#bf3519", "#0e85cf", "#ae48d4", "#d16696", "#1cbd5a", "#f59931", "#8fc7b8", "#edbeea"];
            this.randomColor = this.color[Math.floor(Math.random() * this.color.length)];
            this.skin = "#fce6ac"; 

            this.hitRadius = 20;

        }

        public draw(): void {

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            //Head
            crc2.beginPath();
            crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = this.skin;
            crc2.fill();
            //Body
            crc2.beginPath();
            crc2.moveTo(-10, 25);
            crc2.bezierCurveTo(-5, 0, 5, 0, 5, 25);
            crc2.closePath();
            crc2.fillStyle = this.randomColor; 
            crc2.fill();
            //Ski
            crc2.lineWidth = 4;
            crc2.lineCap = "round";
            crc2.beginPath();
            crc2.moveTo(-20, 35);
            crc2.lineTo(4, 48);
            crc2.moveTo(-11, 34);
            crc2.lineTo(15, 48);
            crc2.strokeStyle = "black";
            crc2.stroke();
            //Legs
            crc2.beginPath();
            crc2.moveTo(-6, 25);
            crc2.lineTo(-4, 33);
            crc2.lineTo(-11, 40);
            crc2.moveTo(1, 25);
            crc2.lineTo(3, 31);
            crc2.lineTo(0, 39);
            crc2.lineCap = "round";
            crc2.lineWidth = 4;
            crc2.strokeStyle = this.randomColor;
            crc2.stroke();
            crc2.closePath();

            crc2.restore();
        }
    

        public move(_timeslice: number): void {
           //console.log("move fahrer");

            let offset: Vector = new Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice); 
            this.position.add(offset); 
            let x: number;
            
            if (this.position.x > 300 && this.position.y < 600) {
                this.position.x = 90; 
            }
            if (this.position.x < 15) {
                x = 20 - this.position.x;
                this.position.x += x;
            }
            if (this.position.y >= 600) {
                this.position = new Vector (0, this.y);
            }

        }//public move zu 

    } //Class zu

} //namesapce zu