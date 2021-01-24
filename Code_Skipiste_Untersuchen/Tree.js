var L11_Skipiste;
(function (L11_Skipiste) {
    var Tree = /** @class */ (function () {
        function Tree() {
            this.position = new L11_Skipiste.Vector(100, 600);
        }
        Tree.prototype.draw = function () {
            //Großer Baum links
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(100, 600);
            L11_Skipiste.crc2.lineTo(135, 425);
            L11_Skipiste.crc2.lineTo(170, 600);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fillStyle = "darkgreen";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.restore();
        };
        return Tree;
    }());
    L11_Skipiste.Tree = Tree;
})(L11_Skipiste || (L11_Skipiste = {}));
