namespace Skipiste_L09{
    console.log("Main");

    export let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.querySelector("canvas");
    export let crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 1400;

    let Mountain: Vektor = new Vektor(0,260);
    let MountainsEnd: Vektor = new Vektor(650,200);
    let snowflake: Snowflake[] = [];
    let peopel: Peopel[] = [];
    
    drawBackground();
    drawSun();
    drawMountain();
    drawTrees();
    let imageData: ImageData = crc2.getImageData(0, 0, 800, 1400);
    drawPeopel();
    drawSnowflake(200);

    function drawSnowflake(_number: number): void {
        crc2.fillStyle = "white";

        for(let i: number = 0; i < _number; i++)
            let snowflake: Snowflake = new Snowflake();
            snowflake.draw();
            snowflake.push(snowflake);
        
    }

 }
    function animation(): void {
        crc2.putImageData(imageData, 0, 0);
        for(let peopel of peopels) {
            peopel.move(1/20);
            peopel.draw(20);
        }

        for(let snowflake of snowflakes){
            snowflake.move(1/50);
            snowflake.draw();
        }
    }

        function drawPeopel(_number: number): void{
            let yAxis: number = 300;
            for (let i:number = 0; i < _number; i++){
                let v: Vektor = new Vektor(450, 550);
                v.random(450, 550, 200, 200);
                v.y = yAxis;
            let s: string = randomColor();
            let peopel: Peopel = new Peopel(s, v);
            peopel.draw(25);
            peopel.push(peopel);
            yAxis += 50;

            }
        }





    