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
var Hexenkessel;
(function (Hexenkessel) {
    window.addEventListener("load", handleLoad);
    var form;
    var deleteBtn;
    var submitBtn;
    var transferBtn;
    var loadBtn;
    var orders;
    var promptName;
    var serverPage = "https://hogwartsrecipes.herokuapp.com"; //"http://localhost:5001/"; 
    function handleLoad(_event) {
        return __awaiter(this, void 0, void 0, function () {
            var response, listOfIncredients, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promptName = prompt("Willkomen lieber Zauberschüler! Wie heißt du?");
                        return [4 /*yield*/, fetch("data.json")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 2:
                        listOfIncredients = _a.sent();
                        data = JSON.parse(listOfIncredients);
                        Hexenkessel.generateContant(data);
                        form = document.querySelector("form#orderform");
                        orders = document.querySelector("div#orders");
                        submitBtn = document.querySelector("button#send_Btn");
                        deleteBtn = document.querySelector("button#del_Btn");
                        transferBtn = document.querySelector("button#transfer_Btn");
                        loadBtn = document.querySelector("button#loadBtn");
                        submitBtn.addEventListener("click", sendOrder);
                        deleteBtn.addEventListener("click", deleteOrder);
                        transferBtn.addEventListener("click", handleChange);
                        return [2 /*return*/];
                }
            });
        });
    }
    function handleChange(_event) {
        var formData = new FormData(document.forms[0]);
        for (var _i = 0, formData_1 = formData; _i < formData_1.length; _i++) {
            var entry = formData_1[_i];
            var item = document.querySelector("[value='" + entry[1] + "']"); // Mit der eckigen Klammer kann ich Attribute suchen, hier value. Im entry[1] steht der Value hier z.b. Brot oder Edeka
            switch (entry[0]) {
                case "Name":
                    orders.innerHTML += "<strong>Name des Zaubertranks</strong>" + ":" + "  " + entry[1] + "<br>" + "<br>";
                    break;
                case "Risks":
                    orders.innerHTML += "<strong>Die Risiken & Nebenwirkungen sind:</strong>" + "<br>" + "  " + entry[1] + "<br>";
                    break;
                case "Kind":
                    orders.innerHTML += "<strong>Dein Rezept stellt einen</strong>" + " " + entry[1] + " " + "<strong>her</strong>" + "<br>";
                    break;
                case "Duration":
                    orders.innerHTML += "<strong>Dein Zaubertrank ist für:</strong>" + " " + entry[1] + " " + "<strong>wirksam</strong>" + "<br>";
                    break;
                case "Quantity":
                    orders.innerHTML += "<p>" + "<u><h3>Anleitung</h3></u>" + "<strong>Füge</strong>" + " " + entry[1] + " ";
                    break;
                case "Stir":
                    orders.innerHTML += "<strong>und rühre deinen Zaubertrank auf Stufe:</strong>" + " " + entry[1] + "<br>";
                    break;
                case "Inkredenzien":
                    orders.innerHTML += item.value + " " + "<strong>hinzu</strong>" + "<br>";
                    break;
                case "Consistency":
                    orders.innerHTML += "<strong>Dein Trank sollte nun die Konsistenz</strong>" + " " + item.value + " " + "<strong>haben</strong>" + "<br>";
                    break;
                case "Color":
                    switch (item.value) {
                        case "lightblue":
                            orders.innerHTML += "<strong>bis er die Farbe Blau</strong>" + " " + " " + "<strong>annimmt</strong>" + "<br>";
                            orders.style.backgroundColor = item.value;
                            break;
                        case "purple":
                            orders.innerHTML += "<strong>bis er die Farbe Lila</strong>" + " " + " " + "<strong>annimmt</strong>" + "<br>";
                            orders.style.backgroundColor = item.value;
                            break;
                        case "green":
                            orders.innerHTML += "<strong>bis er die Farbe Grün</strong>" + " " + " " + "<strong>annimmt</strong>" + "<br>";
                            orders.style.backgroundColor = item.value;
                            break;
                        case "pink":
                            orders.innerHTML += "<strong>bis er die Farbe Rosa</strong>" + " " + " " + "<strong>annimmt</strong>" + "<br>";
                            orders.style.backgroundColor = item.value;
                            break;
                        case "red":
                            orders.innerHTML += "<strong>bis er die Farbe Rot</strong>" + " " + " " + "<strong>annimmt</strong>" + "<br>";
                            orders.style.backgroundColor = item.value;
                            break;
                    }
                default:
                    var itemPrice = Number(item.getAttribute("price")); // holt sich aus variablen item den Price und formatiert das was in der Klammer steht zu einer Nummer
                    orders.innerHTML += "<p>" + "Der Gesamtpreis beträgt" + " " + itemPrice.toFixed(2) + " Sikel" + "<br>";
            }
        }
    }
    function sendOrder(_event) {
        return __awaiter(this, void 0, void 0, function () {
            var formData, query, response, responseText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Der Button Senden wurde gedrückt");
                        formData = new FormData(form);
                        query = new URLSearchParams(formData);
                        return [4 /*yield*/, fetch(serverPage + "?" + query.toString())];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 2:
                        responseText = _a.sent();
                        query.append("name of wizard", promptName);
                        alert("Hallo " + promptName + "\n\r" + " folgendes Rezept wurde an Hogwarts gesendet " + "\n\r" + responseText);
                        location.reload();
                        return [2 /*return*/];
                }
            });
        });
    }
    function deleteOrder(_event) {
        console.log("Delete Order");
        location.reload();
    }
})(Hexenkessel || (Hexenkessel = {}));
