var L11_Skipiste;
(function (L11_Skipiste) {
    var Lift = /** @class */ (function () {
        function Lift() {
            //console.log("construct Lift");
            this.position = new L11_Skipiste.Vector(610, 300);
            this.speed = new L11_Skipiste.Vector(20, -11);
            this.task = L11_Skipiste.TASK.STOPPING;
            this.hitRadius = 50;
        }
        Lift.prototype.draw = function () {
            // console.log("draw Lift");
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.translate(this.position.x, this.position.y);
            L11_Skipiste.crc2.translate(-this.position.x, -this.position.y);
            //Wagon
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.rect(this.position.x - 60, this.position.y + 40, 130, 90);
            L11_Skipiste.crc2.fillStyle = "#a9c9c9";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fillStyle = "black";
            L11_Skipiste.crc2.font = "15px sans-serif";
            L11_Skipiste.crc2.fillText("SKI LIFT", this.position.x - 30, this.position.y + 120);
            // Verbindung 
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.rect(this.position.x, this.position.y, 10, 40);
            L11_Skipiste.crc2.fillStyle = "grey";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.closePath();
            //Rahmen
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.rect(this.position.x - 50, this.position.y + 50, 30, 45);
            L11_Skipiste.crc2.fillStyle = "white";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.closePath();
            //Rahmen2
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.rect(this.position.x + 30, this.position.y + 50, 30, 45);
            L11_Skipiste.crc2.fillStyle = "white";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.closePath();
            //Rahmen3
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.rect(this.position.x - 50, this.position.y + 50, 114, 50);
            L11_Skipiste.crc2.lineWidth = 2;
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.closePath();
            //Fenster1
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.rect(this.position.x - 46, this.position.y + 52, 30, 45);
            L11_Skipiste.crc2.fillStyle = "lightgrey";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.closePath();
            //Fenster2
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.rect(this.position.x - 10, this.position.y + 52, 30, 45);
            L11_Skipiste.crc2.fillStyle = "lightgrey";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.closePath();
            //Fenster3
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.rect(this.position.x + 27, this.position.y + 52, 30, 45);
            L11_Skipiste.crc2.fillStyle = "lightgrey";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.closePath();
            // crc2.save();
            L11_Skipiste.crc2.restore();
        };
        Lift.prototype.moveUp = function (_timeslice) {
            // if (stop == false) {
            //wenn der Lift sich bewegt ohne getroffen worden zu sein dann...
            var offset = new L11_Skipiste.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset);
        };
        return Lift;
    }()); //class zu 
    L11_Skipiste.Lift = Lift;
})(L11_Skipiste || (L11_Skipiste = {})); //namespace zu
