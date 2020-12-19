var Skipiste_L09;
(function (Skipiste_L09) {
    console.log("Snowflake");
    var Snowflake = /** @class */ (function () {
        function Snowflake() {
        }
        Snowflake.prototype.move = function (_timeslice) {
            // console.log("snowflake is moving");
        };
        Snowflake.prototype.draw = function () {
            var x = Math.random() * window.innerWidth;
            var y = Math.random() * window.innerHeight;
            var radiusSnowflake = Math.random() * 2.5 + 1;
            Skipiste_L09.crc2.beginPath();
            Skipiste_L09.crc2.arc(x, y, radiusSnowflake, 0, Math.PI * 2, false);
            Skipiste_L09.crc2.fillStyle = "white";
            crc.fill();
        };
        return Snowflake;
    }());
    Skipiste_L09.Snowflake = Snowflake;
})(Skipiste_L09 || (Skipiste_L09 = {}));
