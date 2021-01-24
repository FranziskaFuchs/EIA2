var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var L11_Skipiste;
(function (L11_Skipiste) {
    var Skier = /** @class */ (function (_super) {
        __extends(Skier, _super);
        function Skier(_y, _position) {
            var _this = _super.call(this, _position) || this;
            _this.y = _y;
            _this.position = new L11_Skipiste.Vector(0, _y); //Startposition 
            _this.speed = new L11_Skipiste.Vector(110, 200);
            _this.color = ["#f4f72f", "#bf3519", "#0e85cf", "#ae48d4", "#d16696", "#1cbd5a", "#f59931", "#8fc7b8", "#edbeea"];
            _this.randomColor = _this.color[Math.floor(Math.random() * _this.color.length)];
            _this.skin = "#fce6ac";
            _this.hitRadius = 20;
            return _this;
        }
        Skier.prototype.draw = function () {
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.translate(this.position.x, this.position.y);
            //Head
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fillStyle = this.skin;
            L11_Skipiste.crc2.fill();
            //Body
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(-10, 25);
            L11_Skipiste.crc2.bezierCurveTo(-5, 0, 5, 0, 5, 25);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fillStyle = this.randomColor;
            L11_Skipiste.crc2.fill();
            //Ski
            L11_Skipiste.crc2.lineWidth = 4;
            L11_Skipiste.crc2.lineCap = "round";
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(-20, 35);
            L11_Skipiste.crc2.lineTo(4, 48);
            L11_Skipiste.crc2.moveTo(-11, 34);
            L11_Skipiste.crc2.lineTo(15, 48);
            L11_Skipiste.crc2.strokeStyle = "black";
            L11_Skipiste.crc2.stroke();
            //Legs
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(-6, 25);
            L11_Skipiste.crc2.lineTo(-4, 33);
            L11_Skipiste.crc2.lineTo(-11, 40);
            L11_Skipiste.crc2.moveTo(1, 25);
            L11_Skipiste.crc2.lineTo(3, 31);
            L11_Skipiste.crc2.lineTo(0, 39);
            L11_Skipiste.crc2.lineCap = "round";
            L11_Skipiste.crc2.lineWidth = 4;
            L11_Skipiste.crc2.strokeStyle = this.randomColor;
            L11_Skipiste.crc2.stroke();
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.restore();
        };
        Skier.prototype.move = function (_timeslice) {
            //console.log("move fahrer");
            var offset = new L11_Skipiste.Vector(this.speed.x, this.speed.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            var x;
            if (this.position.x > 300 && this.position.y < 600) {
                this.position.x = 90;
            }
            if (this.position.x < 15) {
                x = 20 - this.position.x;
                this.position.x += x;
            }
            if (this.position.y >= 600) {
                this.position = new L11_Skipiste.Vector(0, this.y);
            }
        }; //public move zu 
        return Skier;
    }(L11_Skipiste.Moveable)); //Class zu
    L11_Skipiste.Skier = Skier;
})(L11_Skipiste || (L11_Skipiste = {})); //namesapce zu
