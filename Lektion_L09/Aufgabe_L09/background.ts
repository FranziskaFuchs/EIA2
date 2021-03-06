namespace Skipiste_L09 {
    console.log("Background")
    interface Vektor {
        x:number;
        y:number;
    }

export function drawBackground(): void{ 
    let gradient: CanvasGradient = crc2.createLinearGradient(0,0,0,crc2.canvas.height);
        gradient.addColorStop(0,"#0489B1");
        gradient.addColorStop(0, "#81DAF5");
        gradient.addColorStop(1,"white");

        crc2.fillStyle = gradient;
        crc2.fillRect(0,0,crc2.canvas.width, crc2.canvas.height);

     }
       

  export function drawSun(_radius: number): void{
        console.log("sun");

        let position: Vektor = new Vektor(175, 75);
        let r1: number = 30;
        let r2: number = 100;
        let gradient: CanvasGradient = crc2.createRadialGradient(0,0,r1,0,0,r2);

        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(1,"HSLA(60, 100%, 50%, 0");

        crc2.fillStyle = gradient;
        crc2.beginPath();
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();
        

    }

    export function drawCloud(_position:Vektor, _size:Vektor): void{
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
    export function drawSkipiste(): void {
    console.log("Skipiste");

    crc2.save();
    crc2.beginPath();
    crc2.moveTo(0, crc2.canvas.height / 2.2);
    crc2.lineTo(crc2.canvas.width/ 2.3, crc2.canvas.height / 4.0);
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


    export function drawMountains(_position: Vektor, _min: number, _max: number, _colorLow: string, _colorHigh: string): void {
        console.log ("mountains:", _position, _min, _max);
        let stepMin: number = 10;
        let stepMax: number = 50;
        let x: number = 0;

        crc2.save();
        crc2.translate(_position.x , _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
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

    export function drawTrees(): void {
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

    export function drawSingleTree(_position: Vektor): void {
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

 }