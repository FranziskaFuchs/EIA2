namespace L11_Skipiste {

    export enum TASK {
        MOVING,
        STOPPING   
    }

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let imgData: ImageData;


    let schneeflocken: Moveable[] = []; //wenn ich mehrere brauche 
    let skifahrer: Moveable[] = [];
    let moveables: Moveable[] = [];

    let lift: Lift;

    let baum: Tree = new Tree();
    let haus: House = new House();
    let stop: boolean = true;

    function handleLoad(_event: Event): void {
        console.log("starting Animation");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
        return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawCanvas();
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height); //implementierung meines Hintergrunds
         
        canvas.addEventListener("click", stopLift);
        canvas.addEventListener("click", hitSkier);


        createSnowflakes(5000); 
        createSkier(6);
        createLift();
        animate();
    }

    //Funktion "hitSkier" --> klickt man auf den Skifahrer beginnt dieser wieder von seiner Startposition zu fahren!
    function hitSkier(_event: MouseEvent): void {

        let mousePosition: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop); //position meiner maus
        for (let oneSkier of skifahrer) {
            if (oneSkier.position.x - oneSkier.hitRadius < mousePosition.x && oneSkier.position.x + oneSkier.hitRadius > mousePosition.x) {
                if (oneSkier.position.y - oneSkier.hitRadius < mousePosition.y && oneSkier.position.y + oneSkier.hitRadius > mousePosition.y) //position des Skiers
                oneSkier.position = new Vector (0, oneSkier.y); //Fängt wieder oben an
               
                console.log(oneSkier.position);
            }
        }
    }
    //Funktion "stopLift" --> klickt man auf den Lift stoppt dieser für 5 sekunden und setzt sich danach von seiner aktuellen Position wieder in Bewegung!
    function stopLift(_event: MouseEvent): void {
        debugger;
        let mousePosition: Vector = new Vector(_event.clientX - crc2.canvas.offsetLeft, _event.clientY - crc2.canvas.offsetTop);
        if (lift.position.x - lift.hitRadius < mousePosition.x && lift.position.x + lift.hitRadius > mousePosition.x) {
            if (lift.position.y - lift.hitRadius < mousePosition.y && lift.position.y + lift.hitRadius > mousePosition.y)
            stop = true; //Debugger geht nicht hier rein sondern springt gleich weiter   

            if (stop == true) {
                window.setTimeout(startLift, 5000); //Nach 5 sekunden soll der Lift wieder weiter fahren!
            }
        }
    }

    //Funktion "startLift" --> wird nach den nach den 5 sekunden pause aufgerufen --> hier setzt sich der lift wieder in bewegung (allerdings fehlte mir hier der Ansatz)
    function startLift(_stopLift: MouseEvent): void {
        //
    }


    //Schneeflocken
    function createSnowflakes(_nFlocken: number): void { 
        for (let i: number = 0; i < _nFlocken; i++) {
            let flocke: Moveable = new Snowflake();  
            flocke.x = Math.random() * window.innerWidth; 
            flocke.y = Math.random() * window.innerHeight;
            flocke.speed2 = (Math.random() + 1) * 0.1; 
            schneeflocken.push(flocke); 
        }           
    }

    //Skifahrer
    function createSkier(_nSkier: number): void {
        let y: number = 200;
        for (let i: number = 0; i < _nSkier; i++) {
            let oneSkier: Moveable = new Skier(y);
            y += 50;
            skifahrer.push(oneSkier);
            }
        }

    //Lift 
    function createLift(): void {
        lift = new Lift();
        console.log("create Lift");
        console.log(lift.position);

    }

    //animation
    function animate(): void { 
        window.setTimeout(animate, 10);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        crc2.putImageData(imgData, 0, 0);
        
        moveMoveables();
        drawMoveables();

    }//animation zu


    function moveMoveables(): void { 

        //Schneeflocken
        for (let i: number = 0; i < schneeflocken.length; i++) {
            schneeflocken[i].move(1);
        }

        //Skifahrer
        for (let i: number = 0; i < skifahrer.length; i++) {
            skifahrer[i].move(1 / 80);
            
        } 
        
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }

        moveUp();

    }//moveObject zu

    function moveUp(): void {
       // lift.position.x += 1;
        lift.moveUp(1 / 70);
    }


    function drawMoveables(): void { 
           
        // Skifahrer
        for (let i: number = 0; i < skifahrer.length; i++) {
            skifahrer[i].draw();
        }
        //Tree
        baum.draw();

        //Haus
        haus.draw();

        // Lift
        lift.draw();

        //Schneeflocken
        for (let i: number = 0; i < schneeflocken.length; i++) {
            schneeflocken[i].draw();
        }


    }//drawObject zu

} //namespace zu
  