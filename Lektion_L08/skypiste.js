var L08_Skypiste;
(function (L08_Skypiste) {
    window.addEventListener("load", handleLoad);
    var crc2;
    var golden = 0.62;
    function handleLoad(_event) {
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        var horizon = crc2.canvas.height * golden;
        drawBackground();
        drawSun({ x: 75, y: 75 });
        drawCloud({ x: 450, y: 75 }, { x: 100, y: 50 });
        drawMountains({ x: -1000, y: horizon }, 50, 150, "grey", "lightgrey");
        drawSkipiste();
        drawSkiliftpfosten({ x: -100, y: 1 });
        drawTrees();
        drawSkiliftseil();
        drawPeopel();
        function drawBackground() {
            console.log("background");
            var gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "#0489B1");
            gradient.addColorStop(0, "#81DAF5");
            gradient.addColorStop(golden, "white");
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }
        function drawSun(_position) {
            console.log("sun", _position);
            var r1 = 30;
            var r2 = 100;
            var gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0");
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            crc2.fill();
            crc2.restore;
        }
        function drawCloud(_position, _size) {
            console.log("Cloud", _position, _size);
            var nParticles = 65;
            var radiusParticle = 25;
            var particle = new Path2D();
            var gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
            for (var drawn = 0; drawn < nParticles; drawn++) {
                crc2.save();
                var x = (Math.random() - 0.5) * _size.x;
                var y = (Math.random() * _size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
        }
        function drawSkipiste() {
            console.log("Skipiste");
            crc2.save();
            crc2.beginPath();
            crc2.moveTo(0, crc2.canvas.height / 1.5);
            crc2.lineTo(crc2.canvas.width, crc2.canvas.height / 2.6);
            crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
            crc2.lineTo(-1000, crc2.canvas.height);
            crc2.closePath();
            var gradient = crc2.createLinearGradient(crc2.canvas.width, 160, 0, crc2.canvas.height);
            gradient.addColorStop(0, "HSL(200, 99%,99%)");
            gradient.addColorStop(1, "HSL(190, 20%, 60%)");
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.restore();
        }
        function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
            console.log("Mountains");
            var stepMin = 10;
            var stepMax = 50;
            var x = 0;
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -_max);
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                var y = -_min - Math.random() * (_max - _min);
                crc2.lineTo(x, y);
            } while (x < crc2.canvas.width);
            crc2.lineTo(x, 0);
            crc2.closePath();
            var gradient = crc2.createLinearGradient(0, 0, 0, _max);
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(1, _colorHigh);
            crc2.fillStyle = gradient;
            crc2.fill();
            crc2.restore();
        }
        function drawSkiliftpfosten(_position) {
            console.log("Pfosten");
            var x = 0;
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.beginPath();
            crc2.moveTo(550, 550);
            crc2.lineTo(550, -80);
            crc2.stroke();
            crc2.lineTo(850, -125);
            crc2.stroke();
            crc2.fillStyle = "black";
            crc2.restore();
        }
        function drawTrees() {
            console.log("Trees");
            crc2.save();
            crc2.translate(30, 1000);
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
            crc2.restore();
        }
        function drawSingleTree(_position) {
            console.log("SingleTree");
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.beginPath();
            crc2.moveTo(-30, 70);
            crc2.lineTo(-20, 50);
            crc2.lineTo(-25, 50);
            crc2.lineTo(-15, 30);
            crc2.lineTo(-20, 30);
            crc2.lineTo(0, 0);
            crc2.lineTo(20, 30);
            crc2.lineTo(15, 30);
            crc2.lineTo(25, 50);
            crc2.lineTo(20, 50);
            crc2.lineTo(30, 70);
            crc2.closePath();
            crc2.fillStyle = "HSL(120, 60%, " + (Math.random() + 0.09) * 50 + "%)";
            crc2.fill();
            crc2.restore();
        }
        function drawSkiliftseil() {
            console.log("Seil");
        }
        function drawPeopel() {
            console.log("Peopel");
        }
    }
})(L08_Skypiste || (L08_Skypiste = {}));
