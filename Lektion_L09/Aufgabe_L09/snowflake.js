var Skipiste_L09;
(function (Skipiste_L09) {
    console.log("Snowflake");
    var Snowflake = /** @class */ (function () {
        function Snowflake(_position) {
            if (_position)
                this.position = _position;
            else {
                this.position = new Skipiste_L09.Vektor(800, 600);
                this.position.random(800, 600, 0, 0);
            }
        }
        Snowflake.prototype.move = function (_timeslice) {
            var offset = new Skipiste_L09.Vektor(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                (this.position.x += Skipiste_L09.crc2.canvas.width);
            if (this.position.y < 0)
                (this.position.y += Skipiste_L09.crc2.canvas.width);
            if (this.position.x > Skipiste_L09.crc2.canvas.width)
                (this.position.x -= Skipiste_L09.crc2.canvas.width);
            if (this.position.y < Skipiste_L09.crc2.canvas.width)
                (this.position.y -= Skipiste_L09.crc2.canvas.width);
        };
        Snowflake.prototype.draw = function () {
            Skipiste_L09.crc2.save();
            Skipiste_L09.crc2.fillStyle = "white";
            Skipiste_L09.crc2.beginPath();
            Skipiste_L09.crc2.arc(this.position.x, this.position.y, 1, 0, 2 * Math.PI);
            Skipiste_L09.crc2.closePath;
            Skipiste_L09.crc2.fill();
            Skipiste_L09.crc2.restore;
        };
        return Snowflake;
    }());
    Skipiste_L09.Snowflake = Snowflake;
})(Skipiste_L09 || (Skipiste_L09 = {}));
