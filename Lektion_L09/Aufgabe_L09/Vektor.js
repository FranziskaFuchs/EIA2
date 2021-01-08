var Skipiste_L09;
(function (Skipiste_L09) {
    var Vektor = /** @class */ (function () {
        function Vektor(_x, _y) {
            this.x = 0;
            this.y = 0;
            this.set(_x, _y);
        }
        Vektor.prototype.set = function (_x, _y) {
            this.x = _x;
            this.y = _y;
        };
        Vektor.prototype.scale = function (_factor) {
            this.x *= _factor;
            this.y *= _factor;
        };
        Vektor.prototype.add = function (_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        };
        Vektor.prototype.random = function (_maxX, _maxY, _minX, _minY) {
            this.x = Math.random() * (_maxX - _minX) + _minX;
            this.y = Math.random() * (_maxY - _minY) + _minY;
        };
        return Vektor;
    }());
    Skipiste_L09.Vektor = Vektor;
})(Skipiste_L09 || (Skipiste_L09 = {}));
