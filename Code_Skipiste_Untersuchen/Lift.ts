namespace L11_Skipiste {
    export class Lift { 

        public isShaken: boolean;
        public task: TASK;
        public hitRadius: number;
        public position: Vector;  //mein Lift erbt nicht von Moveable dehalb müssen position und speed drin bleiben!
        private speed: Vector;

        

        constructor() {
            //console.log("construct Lift");

            this.position = new Vector (610, 300); 
            this.speed = new Vector (20, -11); 
            this.task = TASK.STOPPING;

            this.hitRadius = 50;
        }

        public draw(): void {
           // console.log("draw Lift");
            crc2.save();

            crc2.translate(this.position.x, this.position.y);
            crc2.translate(-this.position.x, -this.position.y);

            //Wagon
            crc2.beginPath();
            crc2.rect(this.position.x - 60, this.position.y + 40, 130, 90);
            crc2.fillStyle = "#a9c9c9";
            crc2.fill();
            crc2.closePath();

            crc2.fillStyle = "black";
            crc2.font = "15px sans-serif";
            crc2.fillText("SKI LIFT", this.position.x - 30, this.position.y + 120);

            // Verbindung 
            crc2.beginPath();
            crc2.rect(this.position.x, this.position.y, 10, 40);
            crc2.fillStyle = "grey";
            crc2.fill();
            crc2.closePath();

            //Rahmen
            crc2.beginPath();
            crc2.rect(this.position.x - 50, this.position.y + 50, 30, 45);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            //Rahmen2
            crc2.beginPath();
            crc2.rect(this.position.x + 30, this.position.y + 50, 30, 45);
            crc2.fillStyle = "white";
            crc2.fill();
            crc2.closePath();

            //Rahmen3
            crc2.beginPath();
            crc2.rect(this.position.x - 50, this.position.y + 50, 114, 50);
            crc2.lineWidth = 2;
            crc2.fill();
            crc2.closePath();

            //Fenster1
            crc2.beginPath();
            crc2.rect(this.position.x - 46, this.position.y + 52, 30, 45);
            crc2.fillStyle = "lightgrey";
            crc2.fill();
            crc2.closePath();

            //Fenster2
            crc2.beginPath();
            crc2.rect(this.position.x - 10, this.position.y + 52, 30, 45);
            crc2.fillStyle = "lightgrey";
            crc2.fill();
            crc2.closePath();

             //Fenster3
            crc2.beginPath();
            crc2.rect(this.position.x + 27, this.position.y + 52, 30, 45);
            crc2.fillStyle = "lightgrey";
            crc2.fill();
            crc2.closePath();
           // crc2.save();
            
            crc2.restore();
        }


        public moveUp(_timeslice: number): void {

           // if (stop == false) {
               //wenn der Lift sich bewegt ohne getroffen worden zu sein dann...

            let offset: Vector = new Vector(this.speed.x, this.speed.y); 
            offset.scale(_timeslice); 
            this.position.add(offset); 

            }
           
           //if (stop == true) {
               //falls der Lift getroffen wurde und stoppt dann...

            //let newPosition: Vector = new Vector (this.position.x, this.position.y);
            //let offset: Vector = new Vector(this.speed.x, this.speed.y);
            //offset.scale(_timeslice); 
            //this.position.add(offset);
            
            //}

        

    } //class zu 

}//namespace zu
      
       

