var L02_BlackmailerCompanion;
(function (L02_BlackmailerCompanion) {
    console.log("Start");
    var chosenCharacter = "A";
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        var mail = document.querySelector("div#mail");
        mail.addEventListener("click", placeLetter);
        document.addEventListener("keydown", chooseCharacter);
    }
    function placeLetter(_event) {
        // console.log(_event);
        var x = _event.offsetX;
        var y = _event.offsetY;
        var mail = _event.target;
        var letter = document.createElement("span");
        mail.appendChild(letter);
        letter.textContent = chosenCharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";
        letter.addEventListener("click", deleteLetter);
    }
    function chooseCharacter(_event) {
        var target = _event.target;
        var parent = target.parentNode;
        parent.removeChild(target);
    }
})(L02_BlackmailerCompanion || (L02_BlackmailerCompanion = {}));
