var L11_Skipiste;
(function (L11_Skipiste) {
    function drawCanvas() {
        var golden = 0.62; //Goldener Schnitt
        var horizon = L11_Skipiste.crc2.canvas.height * golden;
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 225 }, { x: 450, y: 150 });
        drawMountains({ x: 0, y: horizon }, 75, 200, "lightgrey", "white"); //Das steht im AD im Kasten oben
        drawMountains({ x: 0, y: horizon }, 50, 100, "#FFFAFA", "lightgrey");
        drawHill();
        drawLine();
        drawHouse();
        drawTrees();
        drawStandingSkier1();
        drawStandingSkier2();
        drawStandingSkier3();
        function drawBackground() {
            console.log("background");
            var gradient = L11_Skipiste.crc2.createLinearGradient(0, 0, 0, L11_Skipiste.crc2.canvas.height);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(0.6, "white");
            gradient.addColorStop(1, "white");
            L11_Skipiste.crc2.fillStyle = gradient;
            L11_Skipiste.crc2.fillRect(0, 0, L11_Skipiste.crc2.canvas.width, L11_Skipiste.crc2.canvas.height);
        }
        function drawSun(_position) {
            console.log("sun", _position);
            var r1 = 20;
            var r2 = 150;
            var gradient = L11_Skipiste.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60,100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.translate(_position.x, _position.y);
            L11_Skipiste.crc2.fillStyle = gradient;
            L11_Skipiste.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.restore();
        }
        function drawCloud(_position, _size) {
            console.log("Cloud", _position, _size);
            var nParticles = 15;
            var radiusParticle = 100;
            var particle = new Path2D();
            var gradient = L11_Skipiste.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.translate(_position.x, _position.y);
            L11_Skipiste.crc2.fillStyle = gradient;
            for (var drawn = 0; drawn < nParticles; drawn++) {
                L11_Skipiste.crc2.save();
                var x = (Math.random() - 0.5) * _size.x;
                var y = -(Math.random() * _size.y);
                L11_Skipiste.crc2.translate(x, y);
                L11_Skipiste.crc2.fill(particle);
                L11_Skipiste.crc2.restore();
            }
            L11_Skipiste.crc2.restore();
        }
        function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
            console.log("Mountains");
            var stepMin = 50;
            var stepMax = 150;
            var x = 0;
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.translate(_position.x, _position.y);
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(0, 0);
            L11_Skipiste.crc2.lineTo(0, -_max);
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                var y = -_min - Math.random() * (_max - _min);
                L11_Skipiste.crc2.lineTo(x, y);
            } while (x < L11_Skipiste.crc2.canvas.width);
            L11_Skipiste.crc2.lineTo(x, 0);
            L11_Skipiste.crc2.closePath();
            var gradient = L11_Skipiste.crc2.createLinearGradient(0, 0, 0, -_max);
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(0.7, _colorHigh);
            L11_Skipiste.crc2.fillStyle = gradient;
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.restore();
        }
        function drawHill() {
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(0, 200);
            L11_Skipiste.crc2.stroke();
            L11_Skipiste.crc2.lineTo(0, 600);
            L11_Skipiste.crc2.lineTo(800, 600);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.fillStyle = "white";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.restore();
        }
        function drawTrees() {
            console.log("Trees");
            //Großer Baum rechts
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(550, 600);
            L11_Skipiste.crc2.lineTo(600, 425);
            L11_Skipiste.crc2.lineTo(650, 600);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fillStyle = "green";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.save();
            // Kleiner Baum rechts
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(525, 600);
            L11_Skipiste.crc2.lineTo(550, 500);
            L11_Skipiste.crc2.lineTo(575, 600);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fillStyle = "darkgreen";
            L11_Skipiste.crc2.fill();
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.restore();
        }
        function drawLine() {
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(250, 500);
            L11_Skipiste.crc2.lineTo(800, 200);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.lineWidth = 3;
            L11_Skipiste.crc2.strokeStyle = "black";
            L11_Skipiste.crc2.stroke();
        }
        function drawHouse() {
            console.log("house");
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
        }
        function drawStandingSkier1() {
            console.log("skier standing");
            var skin = "#fce6ac";
            var color = ["#f4f72f", "#bf3519", "#0e85cf", "#ae48d4", "#d16696", "#1cbd5a"];
            var randomColor = color[Math.floor(Math.random() * color.length)];
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.translate(400, 550);
            //Head
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fillStyle = skin;
            L11_Skipiste.crc2.fill();
            //Body
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(-10, 25);
            L11_Skipiste.crc2.bezierCurveTo(-5, 0, 5, 0, 5, 25);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fillStyle = randomColor;
            L11_Skipiste.crc2.fill();
            //Ski
            L11_Skipiste.crc2.lineWidth = 4;
            L11_Skipiste.crc2.lineCap = "round";
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(-20, 35);
            L11_Skipiste.crc2.lineTo(4, 48);
            L11_Skipiste.crc2.moveTo(-11, 34);
            L11_Skipiste.crc2.lineTo(15, 48);
            L11_Skipiste.crc2.strokeStyle = "black";
            L11_Skipiste.crc2.stroke();
            //Legs
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(-6, 25);
            L11_Skipiste.crc2.lineTo(-4, 33);
            L11_Skipiste.crc2.lineTo(-11, 40);
            L11_Skipiste.crc2.moveTo(1, 25);
            L11_Skipiste.crc2.lineTo(3, 31);
            L11_Skipiste.crc2.lineTo(0, 39);
            L11_Skipiste.crc2.lineCap = "round";
            L11_Skipiste.crc2.lineWidth = 4;
            L11_Skipiste.crc2.strokeStyle = randomColor;
            L11_Skipiste.crc2.stroke();
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.restore();
        }
        function drawStandingSkier2() {
            console.log("skier standing");
            var skin = "#fce6ac";
            var color = ["#f4f72f", "#bf3519", "#0e85cf", "#ae48d4", "#d16696", "#1cbd5a"];
            var randomColor = color[Math.floor(Math.random() * color.length)];
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.translate(430, 550);
            //Head
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fillStyle = skin;
            L11_Skipiste.crc2.fill();
            //Body
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(-10, 25);
            L11_Skipiste.crc2.bezierCurveTo(-5, 0, 5, 0, 5, 25);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fillStyle = randomColor;
            L11_Skipiste.crc2.fill();
            //Ski
            L11_Skipiste.crc2.lineWidth = 4;
            L11_Skipiste.crc2.lineCap = "round";
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(-20, 35);
            L11_Skipiste.crc2.lineTo(4, 48);
            L11_Skipiste.crc2.moveTo(-11, 34);
            L11_Skipiste.crc2.lineTo(15, 48);
            L11_Skipiste.crc2.strokeStyle = "black";
            L11_Skipiste.crc2.stroke();
            //Legs
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(-6, 25);
            L11_Skipiste.crc2.lineTo(-4, 33);
            L11_Skipiste.crc2.lineTo(-11, 40);
            L11_Skipiste.crc2.moveTo(1, 25);
            L11_Skipiste.crc2.lineTo(3, 31);
            L11_Skipiste.crc2.lineTo(0, 39);
            L11_Skipiste.crc2.lineCap = "round";
            L11_Skipiste.crc2.lineWidth = 4;
            L11_Skipiste.crc2.strokeStyle = randomColor;
            L11_Skipiste.crc2.stroke();
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.restore();
        }
        function drawStandingSkier3() {
            console.log("skier standing");
            var skin = "#fce6ac";
            var color = ["#f4f72f", "#bf3519", "#0e85cf", "#ae48d4", "#d16696", "#1cbd5a"];
            var randomColor = color[Math.floor(Math.random() * color.length)];
            L11_Skipiste.crc2.save();
            L11_Skipiste.crc2.translate(370, 550);
            //Head
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fillStyle = skin;
            L11_Skipiste.crc2.fill();
            //Body
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(-10, 25);
            L11_Skipiste.crc2.bezierCurveTo(-5, 0, 5, 0, 5, 25);
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.fillStyle = randomColor;
            L11_Skipiste.crc2.fill();
            //Ski
            L11_Skipiste.crc2.lineWidth = 4;
            L11_Skipiste.crc2.lineCap = "round";
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(-20, 35);
            L11_Skipiste.crc2.lineTo(4, 48);
            L11_Skipiste.crc2.moveTo(-11, 34);
            L11_Skipiste.crc2.lineTo(15, 48);
            L11_Skipiste.crc2.strokeStyle = "black";
            L11_Skipiste.crc2.stroke();
            //Legs
            L11_Skipiste.crc2.beginPath();
            L11_Skipiste.crc2.moveTo(-6, 25);
            L11_Skipiste.crc2.lineTo(-4, 33);
            L11_Skipiste.crc2.lineTo(-11, 40);
            L11_Skipiste.crc2.moveTo(1, 25);
            L11_Skipiste.crc2.lineTo(3, 31);
            L11_Skipiste.crc2.lineTo(0, 39);
            L11_Skipiste.crc2.lineCap = "round";
            L11_Skipiste.crc2.lineWidth = 4;
            L11_Skipiste.crc2.strokeStyle = randomColor;
            L11_Skipiste.crc2.stroke();
            L11_Skipiste.crc2.closePath();
            L11_Skipiste.crc2.restore();
        }
    }
    L11_Skipiste.drawCanvas = drawCanvas;
})(L11_Skipiste || (L11_Skipiste = {}));
