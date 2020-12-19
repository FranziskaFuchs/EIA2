var Skipiste_L09;
(function (Skipiste_L09) {
    console.log("Main");
    window.addEventListener("load", handleLoad);
    var imageData;
    var peopel = [];
    var snowflake = [];
    function handleLoad() {
        console.log("load");
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Skipiste_L09.crc2 = canvas.getContext("2d");
        drawBackground();
        imageData = Skipiste_L09.crc2.getImageData(0, 0, canvas.width, canvas.heigth);
        createObject();
        window.setInterval(animate, 100);
    }
    function createObject() {
        for (var i = 0; i < 12; i++) {
            var peoep = void 0;
            -;
            Peopel = new Peopel();
            peopel.push(peopel);
        }
        for (var i = 0; i < 250; i++) {
            var snowflake_1 = new Skipiste_L09.Snowflake();
            snowflake_1.push(snowflake_1);
        }
    }
    function animate() {
        Skipiste_L09.crc2.clearRect(0, 0, Skipiste_L09.crc2.canvas.width, Skipiste_L09.crc2.canvas.height);
        Skipiste_L09.crc2.putImageData(imageData, 0, 0);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (var i = 0; i < peopel.length; i++) {
            peopel[i].move(1 / 50);
        }
        for (var i = 0; i < snowflake.length; i++) {
            snowflake[i].move(1 / 50);
        }
    }
    function drawObjects() {
        for (var i = 0; i < peopel.length; i++) {
            peopel[i].draw();
        }
        for (var i = 0; i < snowflake.length; i++) {
            snowflake[i].draw();
        }
    }
})(Skipiste_L09 || (Skipiste_L09 = {}));
