var Skipiste_L09;
(function (Skipiste_L09) {
    console.log("Background");
    function drawBackground() {
        var gradient = Skipiste_L09.crc2.createLinearGradient(0, 0, 0, Skipiste_L09.crc2.canvas.height);
        gradient.addColorStop(0, "#0489B1");
        gradient.addColorStop(0, "#81DAF5");
        gradient.addColorStop(1, "white");
        Skipiste_L09.crc2.fillStyle = gradient;
        Skipiste_L09.crc2.fillRect(0, 0, Skipiste_L09.crc2.canvas.width, Skipiste_L09.crc2.canvas.height);
    }
    Skipiste_L09.drawBackground = drawBackground;
    function drawSun(_radius) {
        console.log("sun");
        var position = new Skipiste_L09.Vektor(175, 75);
        var r1 = 30;
        var r2 = 100;
        var gradient = Skipiste_L09.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0");
        Skipiste_L09.crc2.fillStyle = gradient;
        Skipiste_L09.crc2.beginPath();
        Skipiste_L09.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        Skipiste_L09.crc2.fill();
    }
    Skipiste_L09.drawSun = drawSun;
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        var nParticles = 65;
        var radiusParticle = 25;
        var particle = new Path2D();
        var gradient = Skipiste_L09.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        Skipiste_L09.crc2.save();
        Skipiste_L09.crc2.translate(_position.x, _position.y);
        Skipiste_L09.crc2.fillStyle = gradient;
        for (var drawn = 0; drawn < nParticles; drawn++) {
            Skipiste_L09.crc2.save();
            var x = (Math.random() - 0.5) * _size.x;
            var y = (Math.random() * _size.y);
            Skipiste_L09.crc2.translate(x, y);
            Skipiste_L09.crc2.fill(particle);
            Skipiste_L09.crc2.restore();
        }
    }
    Skipiste_L09.drawCloud = drawCloud;
    function drawSkipiste() {
        console.log("Skipiste");
        Skipiste_L09.crc2.save();
        Skipiste_L09.crc2.beginPath();
        Skipiste_L09.crc2.moveTo(0, Skipiste_L09.crc2.canvas.height / 2.2);
        Skipiste_L09.crc2.lineTo(Skipiste_L09.crc2.canvas.width / 2.3, Skipiste_L09.crc2.canvas.height / 4.0);
        Skipiste_L09.crc2.lineTo(Skipiste_L09.crc2.canvas.width, Skipiste_L09.crc2.canvas.height);
        Skipiste_L09.crc2.lineTo(-1000, Skipiste_L09.crc2.canvas.height);
        Skipiste_L09.crc2.closePath();
        var gradient = Skipiste_L09.crc2.createLinearGradient(Skipiste_L09.crc2.canvas.width, 160, 0, Skipiste_L09.crc2.canvas.height);
        gradient.addColorStop(0, "HSL(200, 99%,99%)");
        gradient.addColorStop(1, "HSL(190, 20%, 60%)");
        Skipiste_L09.crc2.fillStyle = gradient;
        Skipiste_L09.crc2.fill();
        Skipiste_L09.crc2.restore();
    }
    Skipiste_L09.drawSkipiste = drawSkipiste;
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("mountains:", _position, _min, _max);
        var stepMin = 10;
        var stepMax = 50;
        var x = 0;
        Skipiste_L09.crc2.save();
        Skipiste_L09.crc2.translate(_position.x, _position.y);
        Skipiste_L09.crc2.beginPath();
        Skipiste_L09.crc2.moveTo(0, 0);
        Skipiste_L09.crc2.lineTo(0, -_max);
        do {
            x += stepMin + Math.random() * (stepMax - stepMin);
            var y = -_min - Math.random() * (_max - _min);
            Skipiste_L09.crc2.lineTo(x, y);
        } while (x < Skipiste_L09.crc2.canvas.width);
        Skipiste_L09.crc2.lineTo(x, 0);
        Skipiste_L09.crc2.closePath();
        var gradient = Skipiste_L09.crc2.createLinearGradient(0, 0, 0, _max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(1, _colorHigh);
        Skipiste_L09.crc2.fillStyle = gradient;
        Skipiste_L09.crc2.fill();
        Skipiste_L09.crc2.restore();
    }
    Skipiste_L09.drawMountains = drawMountains;
    function drawTrees() {
        console.log("Trees");
        Skipiste_L09.crc2.save();
        Skipiste_L09.crc2.translate(30, 1000);
        var nRows = 4;
        var ymin = 0;
        var xMax = 100;
        for (var r = 0; r < nRows; r++) {
            ymin += r * 30;
            var randomX = Math.random() * xMax;
            do {
                var randomY = Math.random() * 50 + ymin;
                drawSingleTree({ x: randomX, y: randomY });
                randomX = randomX + 50 + Math.random() * 50;
            } while (randomX < xMax);
            xMax += 100;
        }
        Skipiste_L09.crc2.restore();
    }
    Skipiste_L09.drawTrees = drawTrees;
    function drawSingleTree(_position) {
        console.log("SingleTree");
        Skipiste_L09.crc2.save();
        Skipiste_L09.crc2.translate(_position.x, _position.y);
        Skipiste_L09.crc2.beginPath();
        Skipiste_L09.crc2.moveTo(-30, 70);
        Skipiste_L09.crc2.lineTo(-20, 50);
        Skipiste_L09.crc2.lineTo(-25, 50);
        Skipiste_L09.crc2.lineTo(-15, 30);
        Skipiste_L09.crc2.lineTo(-20, 30);
        Skipiste_L09.crc2.lineTo(0, 0);
        Skipiste_L09.crc2.lineTo(20, 30);
        Skipiste_L09.crc2.lineTo(15, 30);
        Skipiste_L09.crc2.lineTo(25, 50);
        Skipiste_L09.crc2.lineTo(20, 50);
        Skipiste_L09.crc2.lineTo(30, 70);
        Skipiste_L09.crc2.closePath();
        Skipiste_L09.crc2.fillStyle = "HSL(120, 60%, " + (Math.random() + 0.09) * 50 + "%)";
        Skipiste_L09.crc2.fill();
        Skipiste_L09.crc2.restore();
    }
    Skipiste_L09.drawSingleTree = drawSingleTree;
})(Skipiste_L09 || (Skipiste_L09 = {}));
