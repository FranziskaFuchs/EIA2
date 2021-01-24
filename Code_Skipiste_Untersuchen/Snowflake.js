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
    var Snowflake = /** @class */ (function (_super) {
        __extends(Snowflake, _super);
        function Snowflake() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Snowflake.prototype.draw = function () {
            // console.log("draw Snowflake");
            var radiusSnowflake = Math.random() * 2.5 + 1;
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.translate(this.x, this.y);
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.arc(this.x, this.y, radiusSnowflake, 0, Math.PI * 2, false);
            L11_Skipiste.crc2.fillStyle = "white";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.restore();
        };
        Snowflake.prototype.move = function () {
            // console.log("move Snowflake");
            if (this.y >= 800) {
                this.y = 0;
            }
            this.y += Math.random() * 1;
        };
        return Snowflake;
    }(L11_Skipiste.Moveable));
    L11_Skipiste.Snowflake = Snowflake;
})(L11_Skipiste || (L11_Skipiste = {}));
//new position geben mit y bsp. -10  mit if schleife
