var L11_Skipiste;
(function (L11_Skipiste) {
    var House = /** @class */ (function () {
        function House() {
            this.position = new L11_Skipiste.Vector(200, 450);
        }
        House.prototype.draw = function () {
            //Hütte
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.rect(200, 450, 150, 150); //(verschriebung rechts X, verscheibung runter Y, länge des Rect, Höhe des Rect)
            var gradient = L11_Skipiste.crc2.createLinearGradient(0, 50, 0, 390);
            L11_Skipiste.crc2.fillStyle = gradient;
            L11_Skipiste.crc2.fillStyle = "#5c4411";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.save();
            //Fenster
            L11_Skipiste.crc2.fillStyle = "#d3e6e6";
            L11_Skipiste.crc2.fillRect(225, 475, 100, 60);
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.fillStyle = "black";
            L11_Skipiste.crc2.font = "10px sans-serif";
            L11_Skipiste.crc2.fillText("KASSE SKI LIFT", 230, 485);
            L11_Skipiste.crc2.fillText("Tagesticket 20€", 230, 500);
            L11_Skipiste.crc2.fillText("Skipass 3 Tage 100€", 230, 510);
            //Dach
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(200, 450);
            L11_Skipiste.crc2.lineTo(275, 400);
            L11_Skipiste.crc2.lineTo(350, 450);
            L11_Skipiste.crc2.stroke();
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.lineWidth = 15;
            L11_Skipiste.crc2.lineCap = "round";
            L11_Skipiste.crc2.strokeStyle = "#d3e6e6";
            L11_Skipiste.crc2.stroke();
            L11_Skipiste.crc2.fillStyle = "white";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.restore();
            //Eiszapfen groß
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(205, 456);
            L11_Skipiste.crc2.lineTo(210, 525);
            L11_Skipiste.crc2.lineTo(215, 456);
            L11_Skipiste.crc2.lineWidth = 2;
            L11_Skipiste.crc2.stroke();
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fillStyle = "white";
            L11_Skipiste.crc2.fill();
            //Eiszapfen klein
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(220, 456);
            L11_Skipiste.crc2.lineTo(222, 500);
            L11_Skipiste.crc2.lineTo(225, 456);
            L11_Skipiste.crc2.lineWidth = 2;
            L11_Skipiste.crc2.stroke();
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fillStyle = "white";
            L11_Skipiste.crc2.fill();
            //Eiszapfen klein rechts
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(330, 456);
            L11_Skipiste.crc2.lineTo(333, 500);
            L11_Skipiste.crc2.lineTo(336, 456);
            L11_Skipiste.crc2.lineWidth = 2;
            L11_Skipiste.crc2.stroke();
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fillStyle = "white";
            L11_Skipiste.crc2.fill();
            //Schneehaufen an der Hütte
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.arc(355, 600, 15, 0, 2 * Math.PI);
            L11_Skipiste.crc2.arc(325, 600, 15, 0, 2 * Math.PI);
            L11_Skipiste.crc2.arc(300, 600, 15, 0, 2 * Math.PI);
            L11_Skipiste.crc2.arc(290, 600, 15, 0, 2 * Math.PI);
            L11_Skipiste.crc2.arc(275, 600, 15, 0, 2 * Math.PI);
            L11_Skipiste.crc2.arc(255, 600, 15, 0, 2 * Math.PI);
            L11_Skipiste.crc2.arc(235, 600, 15, 0, 2 * Math.PI);
            L11_Skipiste.crc2.arc(217, 600, 15, 0, 2 * Math.PI);
            L11_Skipiste.crc2.arc(200, 600, 15, 0, 2 * Math.PI);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fillStyle = "white";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.restore();
        };
        return House;
    }());
    L11_Skipiste.House = House;
})(L11_Skipiste || (L11_Skipiste = {}));
