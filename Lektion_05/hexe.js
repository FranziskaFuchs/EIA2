var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var cauldron;
(function (cauldron) {
    window.addEventListener("load", handleLoad);
    var anweisungscounter = 1;
    var tempEndcondChecked;
    var stirEndcondChecked;
    var form;
    function handleLoad(_event) {
        cauldron.generateContent(cauldron.data);
        form = document.querySelector("form");
        var fieldsets = document.querySelectorAll("fieldset");
        // Install listeners on fieldsets
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
        var submit = document.querySelector("button[id=submitbutton]");
        submit.addEventListener("click", sendRecipe);
    }
    function sendRecipe(_event) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Send recipe");
                        formData = new FormData(form);
                        query = new URLSearchParams(formData);
                        return [4 /*yield*/, fetch("Hexenkessel.html?" + query.toString())];
                    case 1:
                        _a.sent();
                        alert("Recipe sent!");
                        return [2 /*return*/];
                }
            });
        });
    }
    function handleInfoChange(_event) {
        var target = _event.target;
        if (_event.type == "change") {
            switch (target.name) {
                case "Text":
                    console.log(target.value);
                    var title = document.getElementById("trankname");
                    title.innerHTML = "Potion name: " + target.value;
                    break;
                case "Area":
                    var description = document.getElementById("trankbeschreibung");
                    description.innerHTML = "Description/Risks: " + target.value;
                    break;
                case "DatalistEffect":
                    var effect = document.getElementById("trankwirkung");
                    effect.innerHTML = "Effect: " + target.value;
                    break;
                case "DauerStepper":
                    var duration = document.getElementById("trankdauer");
                    duration.innerHTML = "Duration of effect: " + target.value + " hours";
                    break;
            }
        }
        else if (_event.type == "input") {
            switch (target.name) {
                case "MengenSlider":
                    var quantity = document.getElementById("mengenwert");
                    quantity.innerHTML = target.value + " piece(s)/drop(s)";
                    break;
                case "TemperaturSlider":
                    var temp = document.getElementById("temperaturwert");
                    temp.innerHTML = target.value;
                    break;
                case "TempEndconditionDur":
                    var tempduration = document.getElementById("TemperatureEndcondition");
                    tempduration.innerHTML = target.value + " min";
                    break;
                case "StirEndconditionDur":
                    var stirduration = document.getElementById("StirEndcondition");
                    stirduration.innerHTML = target.value + " min";
                    break;
                case "intensityslider":
                    var stirintensity = document.getElementById("intensitywert");
                    stirintensity.innerHTML = target.value;
                case "RadiogroupEndcondition":
                    tempEndcondChecked = target;
                    break;
                case "RadiogroupEndconditionStir":
                    stirEndcondChecked = target;
            }
        }
        else if (_event.type == "click") {
            var instructiondiv = document.getElementById("anweisungsdiv");
            var p = document.createElement("p");
            switch (target.id) {
                case "addZutat":
                    var select = document.getElementById("zutatenSelect");
                    var quantity = document.getElementById("mengenwert");
                    p.innerHTML = anweisungscounter + ". Add " + quantity.innerText + " of " + select.value + ".";
                    instructiondiv.append(p);
                    anweisungscounter += 1;
                    break;
                case "addTempinstruction":
                    var temp = document.getElementById("temperaturwert");
                    var tempConditionStr = "stop when ";
                    if (tempEndcondChecked.id == "endradio1") {
                        var tempduration = document.getElementById("TempEndconditionDur");
                        tempConditionStr += tempduration.innerHTML + " have passed.";
                    }
                    else if (tempEndcondChecked.id == "endradio2") {
                        var consistency = document.getElementById("DatalistConsistencyTemp");
                        tempConditionStr += "the potion has reached a " + consistency.value + " consistency.";
                    }
                    else if (tempEndcondChecked.id == "endradio3") {
                        var color = document.getElementById("tempcolor");
                        tempConditionStr += "the color of the potion is " + color.value + ".";
                    }
                    p.innerHTML = anweisungscounter + ". Bring temperature to " + temp.innerText + " °C, " + tempConditionStr;
                    instructiondiv.append(p);
                    anweisungscounter += 1;
                    break;
                case "addStirinstruction":
                    var stirintensity = document.getElementById("intensitywert");
                    var stirConditionStr = "stop when ";
                    if (stirEndcondChecked.id == "endradio1stir") {
                        var tempduration = document.getElementById("StirEndconditionDur");
                        stirConditionStr += tempduration.innerHTML + " have passed.";
                    }
                    else if (stirEndcondChecked.id == "endradio2stir") {
                        var consistency = document.getElementById("DatalistConsistencyStir");
                        stirConditionStr += "the potion has reached a " + consistency.value + " consistency.";
                    }
                    else if (stirEndcondChecked.id == "endradio3stir") {
                        var color = document.getElementById("stircolor");
                        stirConditionStr += "the color of the potion is " + color.value + ".";
                    }
                    p.innerHTML = anweisungscounter + ". Stir with an intensity of " + stirintensity.innerText + ", " + stirConditionStr;
                    instructiondiv.append(p);
                    anweisungscounter += 1;
                    break;
            }
        }
    }
})(cauldron || (cauldron = {}));
