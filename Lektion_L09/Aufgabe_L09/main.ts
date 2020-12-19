namespace Skipiste_L09{
    console.log("Main");

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let imageData: ImageData;

    let peopel: Peopel[] = [];
    let snowflake: Snowflake[] = [];

    function handleLoad(): void {
        console.log("load");
        let canvas:HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();

        imageData = crc2.getImageData(0, 0, canvas.width, canvas.heigth);

        createObject();

        window.setInterval(animate, 100);
    }

    function createObject(): void {
        for (let i: number = 0; i < 12; i++) {
            let peoep-: Peopel = new Peopel();
            peopel.push(peopel);
        }

        for (let i: number = 0; i < 250; i++) {
            let snowflake: Snowflake = new Snowflake();
            snowflake.push(snowflake);
        }
    }
    
    function animate(): void {
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imageData, 0, 0);

        moveObjects();
        drawObjects();
    }

    function moveObjects(): void {
        for (let i: number = 0; i < peopel.length; i++) {
            peopel[i].move(1 / 50);
        }

        for (let i: number = 0; i < snowflake.length; i++) {
            snowflake[i].move(1 / 50);
        }
    }

    function drawObjects(): void {
        for (let i: number = 0; i < peopel.length; i++) {
            peopel[i].draw();
        }
        for (let i: number = 0; i < snowflake.length; i++) {
            snowflake[i].draw();
        }
     }
}