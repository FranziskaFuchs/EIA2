var Übung_L09;
(function (Übung_L09) {
    var Vector = /** @class */ (function () {
        function Vector(_x, _y) {
            this.x = 0;
            this.y = 0;
            this.set(_x, _y);
        }
        Vector.prototype.set = function (_x, _y) {
            this.x = _x;
            this.y = _y;
        };
        Vector.prototype.scale = function (_factor) {
            this.x *= _factor;
            this.y *= _factor;
        };
        Vector.prototype.add = function (_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        };
        return Vector;
    }());
    var v1 = new Vector();
    v1.scale(2);
    console.log(v1);
})(Übung_L09 || (Übung_L09 = {}));
