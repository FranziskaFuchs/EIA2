var Skipiste_L09;
(function (Skipiste_L09) {
    console.log("Peopel");
    var Peopel = /** @class */ (function () {
        function Peopel() {
        }
        Peopel.prototype.move = function (_timeslice) {
            console.log("Peopel Move");
        };
        Peopel.prototype.draw = function () {
            var x = Math.random() * 500;
            var y = (Math.random() * 300) + 200;
            if (x > 450) {
                y = (Math.random() * 650) + 500;
            }
            var color = ["#ff0000", "#04B404", "#0000ff", "#DF7401", "#04B4AE", "#ff00bf"];
            var randomColor = color[Math.floor(Math.random() * color.length)];
            var radius = 10;
            Skipiste_L09.crc2.save();
            Skipiste_L09.crc2.translate(x, y);
            Skipiste_L09.crc2.rotate(20 * Math.PI / 180);
            Skipiste_L09.crc2.beginPath();
            Skipiste_L09.crc2.arc(0, 0, radius, 0, 2 * Math.PI);
            Skipiste_L09.crc2.fillStyle = randomColor;
            Skipiste_L09.crc2.fill();
            Skipiste_L09.crc2.beginPath();
            Skipiste_L09.crc2.moveTo(0, 0);
            Skipiste_L09.crc2.lineTo(20, 50);
            Skipiste_L09.crc2.lineTo(-20, 50);
            Skipiste_L09.crc2.closePath();
            Skipiste_L09.crc2.fillStyle = randomColor;
            Skipiste_L09.crc2.fill();
            Skipiste_L09.crc2.translate(0, 50);
            Skipiste_L09.crc2.beginPath();
            Skipiste_L09.crc2.moveTo(0, 0);
            Skipiste_L09.crc2.lineTo(0, 25);
            Skipiste_L09.crc2.stroke();
            Skipiste_L09.crc2.translate(0, 25);
            Skipiste_L09.crc2.beginPath();
            Skipiste_L09.crc2.moveTo(-25, 0);
            Skipiste_L09.crc2.lineTo(25, 0);
            Skipiste_L09.crc2.lineTo(45, -20);
            Skipiste_L09.crc2.stroke();
            Skipiste_L09.crc2.restore();
        };
        return Peopel;
    }());
    Skipiste_L09.Peopel = Peopel;
})(Skipiste_L09 || (Skipiste_L09 = {}));
