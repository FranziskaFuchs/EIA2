var Skipiste_L09;
(function (Skipiste_L09) {
    console.log("Main");
    Skipiste_L09.canvas = document.querySelector("canvas");
    Skipiste_L09.crc2 = Skipiste_L09.canvas.getContext("2d");
    Skipiste_L09.canvas.width = 800;
    Skipiste_L09.canvas.height = 1400;
    var Mountain = new Skipiste_L09.Vektor(0, 260);
    var MountainsEnd = new Skipiste_L09.Vektor(650, 200);
    var snowflake = [];
    var peopel = [];
    Skipiste_L09.drawBackground();
    Skipiste_L09.drawSun();
    drawMountain();
    Skipiste_L09.drawTrees();
    var imageData = Skipiste_L09.crc2.getImageData(0, 0, 800, 1400);
    drawPeopel();
    drawSnowflake(200);
    function drawSnowflake(_number) {
        Skipiste_L09.crc2.fillStyle = "white";
        for (var i = 0; i < _number; i++)
            var snowflake_1 = new Skipiste_L09.Snowflake();
        snowflake.draw();
        snowflake.push(snowflake);
    }
})(Skipiste_L09 || (Skipiste_L09 = {}));
function animation() {
    crc2.putImageData(imageData, 0, 0);
    for (var _i = 0, peopels_1 = peopels; _i < peopels_1.length; _i++) {
        var peopel = peopels_1[_i];
        peopel.move(1 / 20);
        peopel.draw(20);
    }
    for (var _a = 0, snowflakes_1 = snowflakes; _a < snowflakes_1.length; _a++) {
        var snowflake = snowflakes_1[_a];
        snowflake.move(1 / 50);
        snowflake.draw();
    }
}
function drawPeopel(_number) {
    var yAxis = 300;
    for (var i = 0; i < _number; i++) {
        var v = new Vektor(450, 550);
        v.random(450, 550, 200, 200);
        v.y = yAxis;
        var s = randomColor();
        var peopel = new Peopel(s, v);
        peopel.draw(25);
        peopel.push(peopel);
        yAxis += 50;
    }
}
