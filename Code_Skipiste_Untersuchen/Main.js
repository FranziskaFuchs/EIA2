var L11_Skipiste;
(function (L11_Skipiste) {
    var TASK;
    (function (TASK) {
        TASK[TASK["MOVING"] = 0] = "MOVING";
        TASK[TASK["STOPPING"] = 1] = "STOPPING";
    })(TASK = L11_Skipiste.TASK || (L11_Skipiste.TASK = {}));
    window.addEventListener("load", handleLoad);
    var imgData;
    var schneeflocken = []; //wenn ich mehrere brauche 
    var skifahrer = [];
    var moveables = [];
    var lift;
    var baum = new L11_Skipiste.Tree();
    var haus = new L11_Skipiste.House();
    var stop = true;
    function handleLoad(_event) {
        console.log("starting Animation");
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        L11_Skipiste.crc2 = canvas.getContext("2d");
        L11_Skipiste.drawCanvas();
        imgData = L11_Skipiste.crc2.getImageData(0, 0, canvas.width, canvas.height); //implementierung meines Hintergrunds
        canvas.addEventListener("click", stopLift);
        canvas.addEventListener("click", hitSkier);
        createSnowflakes(5000);
        createSkier(6);
        createLift();
        animate();
    }
    //Funktion "hitSkier" --> klickt man auf den Skifahrer beginnt dieser wieder von seiner Startposition zu fahren!
    function hitSkier(_event) {
        var mousePosition = new L11_Skipiste.Vector(_event.clientX - L11_Skipiste.crc2.canvas.offsetLeft, _event.clientY - L11_Skipiste.crc2.canvas.offsetTop); //position meiner maus
        for (var _i = 0, skifahrer_1 = skifahrer; _i < skifahrer_1.length; _i++) {
            var oneSkier = skifahrer_1[_i];
            if (oneSkier.position.x - oneSkier.hitRadius < mousePosition.x && oneSkier.position.x + oneSkier.hitRadius > mousePosition.x) {
                if (oneSkier.position.y - oneSkier.hitRadius < mousePosition.y && oneSkier.position.y + oneSkier.hitRadius > mousePosition.y) //position des Skiers
                    oneSkier.position = new L11_Skipiste.Vector(0, oneSkier.y); //Fängt wieder oben an
                console.log(oneSkier.position);
            }
        }
    }
    //Funktion "stopLift" --> klickt man auf den Lift stoppt dieser für 5 sekunden und setzt sich danach von seiner aktuellen Position wieder in Bewegung!
    function stopLift(_event) {
        debugger;
        var mousePosition = new L11_Skipiste.Vector(_event.clientX - L11_Skipiste.crc2.canvas.offsetLeft, _event.clientY - L11_Skipiste.crc2.canvas.offsetTop);
        if (lift.position.x - lift.hitRadius < mousePosition.x && lift.position.x + lift.hitRadius > mousePosition.x) {
            if (lift.position.y - lift.hitRadius < mousePosition.y && lift.position.y + lift.hitRadius > mousePosition.y)
                stop = true; //Debugger geht nicht hier rein sondern springt gleich weiter   
            if (stop == true) {
                window.setTimeout(startLift, 5000); //Nach 5 sekunden soll der Lift wieder weiter fahren!
            }
        }
    }
    //Funktion "startLift" --> wird nach den nach den 5 sekunden pause aufgerufen --> hier setzt sich der lift wieder in bewegung (allerdings fehlte mir hier der Ansatz)
    function startLift(_stopLift) {
        //
    }
    //Schneeflocken
    function createSnowflakes(_nFlocken) {
        for (var i = 0; i < _nFlocken; i++) {
            var flocke = new L11_Skipiste.Snowflake();
            flocke.x = Math.random() * window.innerWidth;
            flocke.y = Math.random() * window.innerHeight;
            flocke.speed2 = (Math.random() + 1) * 0.1;
            schneeflocken.push(flocke);
        }
    }
    //Skifahrer
    function createSkier(_nSkier) {
        var y = 200;
        for (var i = 0; i < _nSkier; i++) {
            var oneSkier = new L11_Skipiste.Skier(y);
            y += 50;
            skifahrer.push(oneSkier);
        }
    }
    //Lift 
    function createLift() {
        lift = new L11_Skipiste.Lift();
        console.log("create Lift");
        console.log(lift.position);
    }
    //animation
    function animate() {
        window.setTimeout(animate, 10);
        L11_Skipiste.crc2.clearRect(0, 0, L11_Skipiste.crc2.canvas.width, L11_Skipiste.crc2.canvas.height);
        L11_Skipiste.crc2.putImageData(imgData, 0, 0);
        moveMoveables();
        drawMoveables();
    } //animation zu
    function moveMoveables() {
        //Schneeflocken
        for (var i = 0; i < schneeflocken.length; i++) {
            schneeflocken[i].move(1);
        }
        //Skifahrer
        for (var i = 0; i < skifahrer.length; i++) {
            skifahrer[i].move(1 / 80);
        }
        for (var _i = 0, moveables_1 = moveables; _i < moveables_1.length; _i++) {
            var moveable = moveables_1[_i];
            moveable.move(1 / 50);
            moveable.draw();
        }
        moveUp();
    } //moveObject zu
    function moveUp() {
        // lift.position.x += 1;
        lift.moveUp(1 / 70);
    }
    function drawMoveables() {
        // Skifahrer
        for (var i = 0; i < skifahrer.length; i++) {
            skifahrer[i].draw();
        }
        //Tree
        baum.draw();
        //Haus
        haus.draw();
        // Lift
        lift.draw();
        //Schneeflocken
        for (var i = 0; i < schneeflocken.length; i++) {
            schneeflocken[i].draw();
        }
    } //drawObject zu
})(L11_Skipiste || (L11_Skipiste = {})); //namespace zu
