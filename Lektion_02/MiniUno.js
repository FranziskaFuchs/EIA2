function anzahl() {
    var anzahl = prompt("Geben sie eine Kartenanzahl ein: ");
    document.getElementById("Anzahl").innerHTML = "Anzahl + anzahl ";
}
;
var Nachziehen = [];
var Ablage = [];
var Gegner = [];
var Spieler = [];
window.onload = function () {
    document.getElementById("Nachziehen").addEventListener("click", KarteNehmen, false);
    GamePlay();
};
function GamePlay() {
    KartenGenerierung();
    Nachziehen = shuffle(Nachziehen); //Karten werden gemischt
    //Spielerkarten werden verteilt:
    for (var i = 0; i < 5; i++) {
        Spieler.push(Nachziehen[i]);
        Gegner.push(Nachziehen[i + 5]);
    }
    Ablage.push(Nachziehen[10]);
    Nachziehen.splice(0, 11);
    console.log(Spieler);
    console.log(Gegner);
    console.log(Nachziehen);
    for (var i = 0; i < Spieler.length; i++) {
        KarteHTML(Spieler[i], "Spieler", i);
    }
    KarteHTML(Ablage[Ablage.length - 1], "Ablage", Ablage.length - 1);
    KarteVerdeckt(Nachziehen[Nachziehen.length - 1], "Nachziehen", Nachziehen.length - 1);
}
function KarteHTML(karte, Zielort, index) {
    var holdingDiv = document.createElement("div");
    holdingDiv.setAttribute("class", "Karte" + " " + karte.KartenFarbe);
    document.getElementById(Zielort).appendChild(holdingDiv);
    var Zahl = document.createElement("p");
    Zahl.setAttribute("class", "Kartenzahl");
    Zahl.innerHTML = "" + karte.KartenWert;
    holdingDiv.appendChild(Zahl);
    if (Zielort == "Spieler") {
        holdingDiv.addEventListener("click", function () { KarteLegen(karte, index); }, false);
    }
}
function KarteVerdeckt(karte, Zielort, index) {
    var holdingDiv = document.createElement("div");
    holdingDiv.setAttribute("class", "Karte" + " " + "Verdeckt");
    document.getElementById(Zielort).appendChild(holdingDiv);
}
function KarteLegen(karte, index) {
    if (karte.KartenFarbe == Ablage[Ablage.length - 1].KartenFarbe || karte.KartenWert == Ablage[Ablage.length - 1].KartenWert) {
        Ablage.push(karte);
        Spieler.splice(index, 1);
        updateHTML("Spielerdeck");
        updateHTML("Ablagestapel");
        Gegnerzug();
    }
}
function KarteNehmen() {
    if (checkKarten(Spieler) == false) {
        Spieler.push(Nachziehen[Nachziehen.length - 1]);
        Nachziehen.splice(Nachziehen.length - 1, 1);
        updateHTML("Spieler");
        updateHTML("Nachziehen");
    }
    if (checkKarten(Spieler) == false) {
        Gegnerzug();
    }
}
function Gegnerzug() {
    //Wenn Gegner nicht legen kann, nimmt er Karte vom Kartenstapel
    var i = 0;
    for (i; i < Gegner.length; i++) {
        if (Gegner[i].KartenFarbe == Ablage[Ablage.length - 1].KartenFarbe || Gegner[i].KartenWert == Ablage[Ablage.length - 1].KartenWert) {
            Ablage.push(Gegner[i]);
            Gegner.splice(i, 1);
            updateHTML("Ablage");
            updateHTML("Gegner");
            break;
        }
    }
    if (i >= Gegner.length) {
        Gegner.push(Nachziehen[Nachziehen.length - 1]);
        Nachziehen.splice(Nachziehen.length - 1, 1);
        updateHTML("Gegner");
        updateHTML("Nachziehen");
        if (Gegner[Gegner.length - 1].KartenFarbe == Ablage[Ablage.length - 1].KartenFarbe || Gegner[Gegner.length - 1].KartenWert == Ablage[Ablage.length - 1].KartenWert) {
            Ablage.push(Gegner[Gegner.length - 1]);
            Gegner.splice(Gegner.length - 1, 1);
            updateHTML("Ablage");
            updateHTML("Gegner");
        }
    }
}
function checkKarten(array) {
    var passendeKarte = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i].KartenFarbe == Ablage[Ablage.length - 1].KartenFarbe || array[i].KartenWert == Ablage[Ablage.length - 1].KartenWert) {
            passendeKarte = true;
            break;
        }
    }
    return passendeKarte;
}
function updateHTML(Zielort) {
    ClearHTML(Zielort);
    if (Zielort == "Spieler") {
        for (var i = 0; i < Spieler.length; i++) {
            KarteHTML(Spieler[i], "Spieler", i);
        }
    }
    if (Zielort == "Gegner") {
        for (var i = 0; i < Gegner.length; i++) {
            KarteVerdeckt(Gegner[i], "Gegner", i);
        }
    }
    if (Zielort == "Ablage") {
        KarteHTML(Ablage[Ablage.length - 1], "Ablage", Ablage.length - 1);
    }
    if (Zielort == "Nachziehen") {
        KarteVerdeckt(Nachziehen[Nachziehen.length - 1], "Nachziehen", Nachziehen.length - 1);
    }
}
function ClearHTML(Zielort) {
    var Element = document.getElementById(Zielort);
    while (Element.firstChild) {
        Element.removeChild(Element.firstChild);
    }
}
function KartenGenerierung() {
    var Farbe;
    for (var i = 1; i <= 8; i++) {
        for (var j = 1; j <= 4; j++) {
            if (j == 1) {
                Farbe = "Blau";
            }
            else if (j == 2) {
                Farbe = "Rot";
            }
            else if (j == 3) {
                Farbe = "Gelb";
            }
            else if (j == 4) {
                Farbe = "Grün";
            }
            var NewKarte = {
                KartenFarbe: Farbe,
                KartenWert: i
            };
            Nachziehen.push(NewKarte);
        }
    }
    console.log(Nachziehen);
}
function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
