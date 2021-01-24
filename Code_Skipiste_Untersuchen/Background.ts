namespace L11_Skipiste {
    interface Vector {
        x: number;
        y: number;
    }

    export function drawCanvas(): void {

        let golden: number = 0.62; //Goldener Schnitt
        let horizon: number = crc2.canvas.height * golden;

        drawBackground();
        drawSun({x: 100, y: 75});
        drawCloud({x: 500, y: 225 }, {x: 450, y: 150});
        drawMountains({x: 0, y: horizon}, 75, 200, "lightgrey", "white");  //Das steht im AD im Kasten oben
        drawMountains({x: 0, y: horizon}, 50, 100, "#FFFAFA", "lightgrey"); 
        drawHill(); 
        drawLine();   
        drawHouse();
        drawTrees();
        drawStandingSkier1();
        drawStandingSkier2();
        drawStandingSkier3();
      
        


        function drawBackground(): void {
            console.log("background");
    
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0, "lightblue");
            gradient.addColorStop(0.6, "white");
            gradient.addColorStop(1, "white");
    
    
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }

        function drawSun(_position: Vector): void {
            console.log("sun", _position);
    
            let r1: number = 20;
            let r2: number  = 150;
    
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSLA(60,100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)"); 
    
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
            crc2.arc(0, 0, r2, 0,  2 * Math.PI);
            crc2.fill();
            crc2.restore();
        }

        function drawCloud(_position: Vector, _size: Vector): void {
            console.log("Cloud", _position, _size);
    
            let nParticles: number = 15;
            let radiusParticle: number = 100;
            let particle: Path2D = new Path2D(); 
    
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
    
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
    
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
    
            crc2.save();
            crc2.translate(_position.x, _position.y);
            crc2.fillStyle = gradient;
    
            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * _size.x;
                let y: number = - (Math.random() * _size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
    
            }
    
            crc2.restore();
        }

        function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
            console.log("Mountains");
    
            let stepMin: number = 50;
            let stepMax: number = 150;
            let x: number = 0;
    
            crc2.save();
            crc2.translate(_position.x, _position.y);
    
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, - _max);
    
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y: number = - _min - Math.random() * (_max - _min);
    
                crc2.lineTo(x, y);
    
            } while (x < crc2.canvas.width);
    
            crc2.lineTo(x, 0);
    
            crc2.closePath();
    
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
    
            gradient.addColorStop(0, _colorLow);
            gradient.addColorStop(0.7, _colorHigh);
    
            crc2.fillStyle = gradient;
            crc2.fill();
    
            crc2.restore();    
    
        }

        function drawHill(): void {

            crc2.beginPath();
            crc2.moveTo(0, 200);  
            crc2.stroke();
            crc2.lineTo(0, 600);
            crc2.lineTo(800, 600);
            crc2.closePath();
    
            crc2.save();
    
            crc2.fillStyle = "white";
            crc2.fill();
    
            crc2.restore(); 
        }

        function drawTrees(): void {
            console.log("Trees");
    
            //Großer Baum rechts
            crc2.beginPath();
            crc2.moveTo(550, 600);
            crc2.lineTo(600, 425);
            crc2.lineTo(650, 600);
            crc2.closePath();
    
            crc2.fillStyle = "green";
            crc2.fill();
            crc2.save();

            // Kleiner Baum rechts
            crc2.beginPath();
            crc2.moveTo(525, 600);
            crc2.lineTo(550, 500);
            crc2.lineTo(575, 600);
            crc2.closePath();
    
            crc2.fillStyle = "darkgreen";
            crc2.fill();
    
            crc2.save();     
     
            crc2.restore();
    
        }

        function drawLine(): void {
            
            crc2.beginPath();
            crc2.moveTo(250, 500);
            crc2.lineTo(800, 200);
            crc2.closePath();
            crc2.lineWidth = 3;
            crc2.strokeStyle = "black";
            crc2.stroke();
        }

        function drawHouse(): void {
            console.log("house");
            
            //Hütte
    
            crc2.beginPath();
            crc2.rect(200, 450, 150, 150); //(verschriebung rechts X, verscheibung runter Y, länge des Rect, Höhe des Rect)
    
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 50, 0, 390);
            crc2.fillStyle = gradient;
    
            crc2.fillStyle = "#5c4411";
            crc2.fill();
            crc2.save();
    
            //Fenster
            
            crc2.fillStyle = "#d3e6e6";
            crc2.fillRect(225, 475 , 100, 60);
            crc2.save();

            crc2.fillStyle = "black";
            crc2.font = "10px sans-serif";
            crc2.fillText("KASSE SKI LIFT", 230, 485);
           
            //Dach
    
            crc2.beginPath();
            crc2.moveTo(200, 450); 
            crc2.lineTo(275, 400); 
            crc2.lineTo(350, 450); 
            crc2.stroke();
            crc2.closePath();
    
            crc2.lineWidth = 15;
            crc2.lineCap = "round";
            crc2.strokeStyle = "#d3e6e6";
            crc2.stroke();
    
            crc2.fillStyle = "white";
            crc2.fill();
    
            crc2.save();  
            crc2.restore(); 

            //Eiszapfen groß

            crc2.beginPath();
            crc2.moveTo(205, 456);
            crc2.lineTo(210, 525);
            crc2.lineTo(215, 456);
            crc2.lineWidth = 2;

            crc2.stroke();
            crc2.closePath();
    
            crc2.fillStyle = "white";
            crc2.fill();

             //Eiszapfen klein

            crc2.beginPath();
            crc2.moveTo(220, 456);
            crc2.lineTo(222, 500);
            crc2.lineTo(225, 456);
            crc2.lineWidth = 2;
 
            crc2.stroke();
            crc2.closePath();
     
            crc2.fillStyle = "white";
            crc2.fill();

            //Eiszapfen klein rechts

            crc2.beginPath();
            crc2.moveTo(330, 456);
            crc2.lineTo(333, 500);
            crc2.lineTo(336, 456);
            crc2.lineWidth = 2;
  
            crc2.stroke();
            crc2.closePath();
      
            crc2.fillStyle = "white";
            crc2.fill();

            //Schneehaufen an der Hütte

            crc2.beginPath();
            crc2.arc(355, 600, 15, 0, 2 * Math.PI);
            crc2.arc(325, 600, 15, 0, 2 * Math.PI);
            crc2.arc(300, 600, 15, 0, 2 * Math.PI);
            crc2.arc(290, 600, 15, 0, 2 * Math.PI);
            crc2.arc(275, 600, 15, 0, 2 * Math.PI);
            crc2.arc(255, 600, 15, 0, 2 * Math.PI);
            crc2.arc(235, 600, 15, 0, 2 * Math.PI);
            crc2.arc(217, 600, 15, 0, 2 * Math.PI);
            crc2.arc(200, 600, 15, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "white";
            crc2.fill();

            crc2.restore();

        }

        function drawStandingSkier1(): void {
            console.log("skier standing");

            let skin: string = "#fce6ac";
            let color: string[] = ["#f4f72f", "#bf3519", "#0e85cf", "#ae48d4", "#d16696", "#1cbd5a"];
            let randomColor: string = color[Math.floor(Math.random() * color.length)];

            crc2.save();
            crc2.translate(400, 550);

            //Head
            crc2.beginPath();
            crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = skin;
            crc2.fill();
            //Body
            crc2.beginPath();
            crc2.moveTo(-10, 25);
            crc2.bezierCurveTo(-5, 0, 5, 0, 5, 25);
            crc2.closePath();
            crc2.fillStyle =  randomColor;
            crc2.fill();
            //Ski
            crc2.lineWidth = 4;
            crc2.lineCap = "round";
            crc2.beginPath();
            crc2.moveTo(-20, 35);
            crc2.lineTo(4, 48);
            crc2.moveTo(-11, 34);
            crc2.lineTo(15, 48);
            crc2.strokeStyle = "black";
            crc2.stroke();
            //Legs
            crc2.beginPath();
            crc2.moveTo(-6, 25);
            crc2.lineTo(-4, 33);
            crc2.lineTo(-11, 40);
            crc2.moveTo(1, 25);
            crc2.lineTo(3, 31);
            crc2.lineTo(0, 39);
            crc2.lineCap = "round";
            crc2.lineWidth = 4;
            crc2.strokeStyle = randomColor;
            crc2.stroke();
            crc2.closePath();

            crc2.restore();
                  
        }

        
        function drawStandingSkier2(): void {
            console.log("skier standing");

            let skin: string = "#fce6ac";
            let color: string[] = ["#f4f72f", "#bf3519", "#0e85cf", "#ae48d4", "#d16696", "#1cbd5a"];
            let randomColor: string = color[Math.floor(Math.random() * color.length)];

            crc2.save();
            crc2.translate(430, 550);

            //Head
            crc2.beginPath();
            crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = skin;
            crc2.fill();
            //Body
            crc2.beginPath();
            crc2.moveTo(-10, 25);
            crc2.bezierCurveTo(-5, 0, 5, 0, 5, 25);
            crc2.closePath();
            crc2.fillStyle =  randomColor;
            crc2.fill();
            //Ski
            crc2.lineWidth = 4;
            crc2.lineCap = "round";
            crc2.beginPath();
            crc2.moveTo(-20, 35);
            crc2.lineTo(4, 48);
            crc2.moveTo(-11, 34);
            crc2.lineTo(15, 48);
            crc2.strokeStyle = "black";
            crc2.stroke();
            //Legs
            crc2.beginPath();
            crc2.moveTo(-6, 25);
            crc2.lineTo(-4, 33);
            crc2.lineTo(-11, 40);
            crc2.moveTo(1, 25);
            crc2.lineTo(3, 31);
            crc2.lineTo(0, 39);
            crc2.lineCap = "round";
            crc2.lineWidth = 4;
            crc2.strokeStyle = randomColor;
            crc2.stroke();
            crc2.closePath();

            crc2.restore();
            
        }

        function drawStandingSkier3(): void {
            console.log("skier standing");

            let skin: string = "#fce6ac";
            let color: string[] = ["#f4f72f", "#bf3519", "#0e85cf", "#ae48d4", "#d16696", "#1cbd5a"];
            let randomColor: string = color[Math.floor(Math.random() * color.length)];

            crc2.save();
            crc2.translate(370, 550);

            //Head
            crc2.beginPath();
            crc2.arc(0, 0, 8, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = skin;
            crc2.fill();
            //Body
            crc2.beginPath();
            crc2.moveTo(-10, 25);
            crc2.bezierCurveTo(-5, 0, 5, 0, 5, 25);
            crc2.closePath();
            crc2.fillStyle =  randomColor;
            crc2.fill();
            //Ski
            crc2.lineWidth = 4;
            crc2.lineCap = "round";
            crc2.beginPath();
            crc2.moveTo(-20, 35);
            crc2.lineTo(4, 48);
            crc2.moveTo(-11, 34);
            crc2.lineTo(15, 48);
            crc2.strokeStyle = "black";
            crc2.stroke();
            //Legs
            crc2.beginPath();
            crc2.moveTo(-6, 25);
            crc2.lineTo(-4, 33);
            crc2.lineTo(-11, 40);
            crc2.moveTo(1, 25);
            crc2.lineTo(3, 31);
            crc2.lineTo(0, 39);
            crc2.lineCap = "round";
            crc2.lineWidth = 4;
            crc2.strokeStyle = randomColor;
            crc2.stroke();
            crc2.closePath();

            crc2.restore();
            
        }


    }
}