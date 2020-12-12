namespace L08_Skypiste {
    interface Vektor {
        x:number;
        y:number;
    }


window.addEventListener("load", handleLoad);
let crc2: CanvasRenderingContext2D;
let golden: number=0.62;

function handleLoad(_event:Event):void {
    let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    if(!canvas)
        return;
    crc2=<CanvasRenderingContext2D>canvas.getContext("2d");

    let horizon: number = crc2.canvas.height * golden;

    drawBackground ();
    drawSun({x:75 , y:75});
    drawCloud({x:450, y:75}, {x:100, y:50});
    drawMountains({x: -1000, y: horizon}, 50, 150, "grey", "lightgrey");
    drawSkipiste();
    drawSkiliftpfosten({x: -100, y: 1});
    drawTrees();
    drawSkiliftseil();
    drawPeopel();


    function drawBackground(): void{
        console.log("background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0,0,0,crc2.canvas.height);
        gradient.addColorStop(0,"#0489B1");
        gradient.addColorStop(0, "#81DAF5");
        gradient.addColorStop(golden,"white");

        crc2.fillStyle = gradient;
        crc2.fillRect(0,0,crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: Vektor): void{
        console.log("sun", _position);

        let r1: number = 30;
        let r2: number = 100;
        let gradient: CanvasGradient = crc2.createRadialGradient(0,0,r1,0,0,r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1,"HSLA(60, 100%, 50%, 0");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        crc2.restore;

    }

    function drawCloud(_position:Vektor, _size:Vektor): void{
        console.log("Cloud", _position, _size);

        let nParticles: number = 65;
        let radiusParticle: number = 25;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for(let drawn: number = 0; drawn < nParticles; drawn++){
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = (Math.random() * _size.y);
            crc2.translate(x,y);
            crc2.fill(particle);
            crc2.restore();
        
        }

    }
    function drawSkipiste(): void {
    console.log("Skipiste");

    crc2.save();
    crc2.beginPath();
    crc2.moveTo(0, crc2.canvas.height / 1.5);
    crc2.lineTo(crc2.canvas.width, crc2.canvas.height / 2.6);
    crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
    crc2.lineTo(-1000, crc2.canvas.height);
    crc2.closePath();

    let gradient: CanvasGradient = crc2.createLinearGradient(crc2.canvas.width, 160, 0, crc2.canvas.height);
    gradient.addColorStop(0, "HSL(200, 99%,99%)");
    gradient.addColorStop(1, "HSL(190, 20%, 60%)");

    crc2.fillStyle = gradient;
    crc2.fill();
    crc2.restore();
}


    function drawMountains(_position: Vektor, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log ("Mountains");
        let stepMin: number = 10;
        let stepMax: number = 50;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x , _position.y);

        crc2.beginPath();
        crc2.moveTo(0,0);
        crc2.lineTo(0, -_max);

        do {
            x += stepMin + Math.random() * (stepMax -stepMin);
            let y: number = -_min - Math.random()* (_max - _min);
            
            crc2.lineTo(x,y);
        } while(x < crc2.canvas.width);
    
    crc2.lineTo(x,0);
    crc2.closePath();
    
    let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, _max);
    gradient.addColorStop(0, _colorLow);
    gradient.addColorStop(1, _colorHigh);

    crc2.fillStyle = gradient;
    crc2.fill(); 
    crc2.restore();
}




    function drawSkiliftpfosten(_position: Vektor):void {
        console.log("Pfosten");
        let x: number =  0;

        crc2.save();
        crc2.translate(_position.x , _position.y);

        crc2.beginPath();
        crc2.moveTo(550,550);
        crc2.lineTo(550, -80);
        crc2.stroke();
        crc2.lineTo(850,-125);
        crc2.stroke();

    
        crc2.fillStyle = "black";
        crc2.restore();
    }


    function drawTrees(): void {
        console.log("Trees");
       
        crc2.save();
        crc2.translate(30, 1000);
        let nRows: number = 4;
        let ymin: number = 0;
        let xMax: number = 100;
        for (let r: number = 0; r < nRows; r++) {
            ymin += r * 30;
            let randomX: number = Math.random() * xMax;
            do {
                let randomY: number = Math.random() * 50 + ymin;
                drawSingleTree({x: randomX, y: randomY});
                randomX = randomX + 50 +  Math.random() * 50;
            } while (randomX < xMax);
            xMax += 100;
        }
        crc2.restore();
        
    }

    function drawSingleTree(_position: Vektor): void {
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


    
    
    
    function drawSkiliftseil(): void {
        console.log("Seil");
    }

    function drawPeopel(): void {
        console.log("Peopel");
    }
 }
 
  }