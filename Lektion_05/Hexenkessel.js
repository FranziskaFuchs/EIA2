"use strict";
exports.__esModule = true;
var L05_Hexenkessel;
(function (L05_Hexenkessel) {
    window.addEventListener("load", handleLoad);
    var anweisung = 1;
    var temperature;
    var stir;
    function handleLoad(_event) {
        generateContent(exports.data);
        var fieldsets = document.querySelectorAll("fieldset");
        for (var i = 0; i < fieldsets.length; i++) {
            var fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleInfoChange);
            fieldset.addEventListener("input", handleInfoChange);
        }
        var buttons = document.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++) {
            var button = buttons[i];
            button.addEventListener("click", handleInfoChange);
        }
    }
    function handleInfoChange(_event) {
        var target = _event.target;
        if (_event.type == "change") {
            switch (target.name) {
                case "Text":
                    console.log(target.value);
                    var title = document.getElementById("name");
                    title.innerHTML = "Potion name: " + target.value;
                    break;
                case "Area":
                    var description = document.getElementById("beschreibung");
                    description.innerHTML = "Description/Risks: " + target.value;
                    break;
                case "DatalistEffect":
                    var effect = document.getElementById("wirkung");
                    effect.innerHTML = "Effect: " + target.value;
                    break;
                case "DauerStepper":
                    var duration = document.getElementById("dauer");
                    duration.innerHTML = "Duration of effect: " + target.value + " hours";
                    break;
            }
        }
        else if (_event.type == "input") {
            switch (target.name) {
                case "MengenSlider":
                    var quantity = document.getElementById("menge");
                    quantity.innerHTML = target.value + " piece(s)/drop(s)";
                    break;
                case "TemperaturSlider":
                    var temp = document.getElementById("temperatur");
                    temp.innerHTML = target.value;
                    break;
                case "TempEndconditionDur":
                    var tempduration = document.getElementById("TempEndconditionDur");
                    tempduration.innerHTML = target.value + " min";
                    break;
                case "StirEndconditionDur":
                    var stirduration = document.getElementById("StirEndconditionDur");
                    stirduration.innerHTML = target.value + " min";
                    break;
                case "intensityslider":
                    var stirintensity = document.getElementById("intensitywert");
                    stirintensity.innerHTML = target.value;
                case "RadiogroupEndcondition":
                    temperature = target;
                    break;
                case "RadiogroupEndconditionStir":
                    stir = target;
            }
        }
        else if (_event.type == "click") {
            var instructiondiv = document.getElementById("anweisungsdiv");
            var p = document.createElement("p");
            switch (target.id) {
                case "addZutat":
                    var select = document.getElementById("zutatenSelect");
                    var quantity = document.getElementById("mengenwert");
                    p.innerHTML = anweisung + ". Add " + quantity.innerText + " of " + select.value + ".";
                    instructiondiv.append(p);
                    anweisung += 1;
                    break;
                case "addTempinstruction":
                    var temp = document.getElementById("temperatur");
                    var tempConditionStr = "stop when ";
                    if (temperature.id == "endradio1") {
                        var tempduration = document.getElementById("TempEndconditionDur");
                        tempConditionStr += tempduration.innerHTML + " have passed.";
                    }
                    else if (temperature.id == "endradio2") {
                        var consistency = document.getElementById("DatalistConsistencyTemp");
                        tempConditionStr += "the potion has reached a " + consistency.value + " consistency.";
                    }
                    else if (temperature.id == "endradio3") {
                        var color = document.getElementById("tempcolor");
                        tempConditionStr += "the color of the potion is " + color.value + ".";
                    }
                    p.innerHTML = anweisung + ". Bring temperature to " + temp.innerText + " °C, " + tempConditionStr;
                    instructiondiv.append(p);
                    anweisung += 1;
                    break;
                case "addStir":
                    var stirintensity = document.getElementById("intensitywert");
                    var stirConditionStr = "stop when ";
                    if (stir.id == "endradio1stir") {
                        var tempduration = document.getElementById("StirEndconditionDur");
                        stirConditionStr += tempduration.innerHTML + " have passed.";
                    }
                    else if (stir.id == "endradio2stir") {
                        var consistency = document.getElementById("DatalistConsistencyStir");
                        stirConditionStr += "the potion has reached a " + consistency.value + " consistency.";
                    }
                    else if (stir.id == "endradio3stir") {
                        var color = document.getElementById("stircolor");
                        stirConditionStr += "the color of the potion is " + color.value + ".";
                    }
                    p.innerHTML = anweisung + ". Stir with an intensity of " + stirintensity.innerText + ", " + stirConditionStr;
                    instructiondiv.append(p);
                    anweisung += 1;
                    break;
            }
        }
    }
})(L05_Hexenkessel || (L05_Hexenkessel = {}));
exports.data = [
    { name: "spider legs", price: 25 },
    { name: "roses", price: 10 },
    { name: "Bart Haare", price: 500 }
];
function generateContent(_data) {
    console.log(_data);
}
exports.generateContent = generateContent;
