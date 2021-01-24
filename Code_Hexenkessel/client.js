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
var L07_Hexenkessel;
(function (L07_Hexenkessel) {
    function getData() {
        return __awaiter(this, void 0, void 0, function () {
            var response, content, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("data.json")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.text()];
                    case 2:
                        content = _a.sent();
                        data = JSON.parse(content);
                        console.log("DATA:");
                        console.log(data);
                        L07_Hexenkessel.generateContent(data);
                        return [2 /*return*/];
                }
            });
        });
    }
    L07_Hexenkessel.getData = getData;
    function sendPotion(_event) {
        return __awaiter(this, void 0, void 0, function () {
            var url, formData, query, select, textarea, response, responseReply;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("send Potion");
                        url = "https://cocosailer.herokuapp.com/send";
                        formData = new FormData(document.forms[0]);
                        query = new URLSearchParams(formData);
                        console.log(document.getElementById("action") ? .innerText : );
                        url = url + "?" + query.toString();
                        console.log(url);
                        select = document.querySelector("select");
                        textarea = document.querySelector("textarea");
                        if (select)
                            url += "&Wirkung=" + select.value;
                        if (textarea.value != "")
                            url += "&Nebenwirkungen=" + textarea.value;
                        url += "&Action=" + document.getElementById("action") ? .innerHTML : ;
                        if (document.getElementById("total") ? .innerText != "" : )
                            url += "&TotalPrice=" + document.getElementById("total") ? .innerText : ;
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _a.sent();
                        console.log(response);
                        return [4 /*yield*/, response.text()];
                    case 2:
                        responseReply = _a.sent();
                        console.log(responseReply);
                        alert("Potion sent!");
                        return [2 /*return*/];
                }
            });
        });
    }
    L07_Hexenkessel.sendPotion = sendPotion;
    function getPotion(_event) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, reply, _a, _b, i, div, p;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        url = "https://cocosailer.herokuapp.com/retrieve";
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _c.sent();
                        _b = (_a = JSON).parse;
                        return [4 /*yield*/, response.text()];
                    case 2:
                        reply = _b.apply(_a, [_c.sent()]);
                        document.getElementById("output").innerHTML = "";
                        for (i = 0; i < reply.length; i++) {
                            div = document.createElement("div");
                            div.setAttribute("class", "vorschau");
                            p = document.createElement("p");
                            p.innerHTML += "<h4>Trankname: " + reply[i].Trankname + "</h4><br>";
                            if (reply[i].Nebenwirkung != undefined)
                                p.innerHTML += "<b>Beschreibung, Nebenwirkungen:</b> " + reply[i].Nebenwirkung + "<br>";
                            p.innerHTML += "<b>Wirkung:</b> " + reply[i].Wirkung + "<br>" + "<b>Wirkungsdauer:</b> " + reply[i].Wirkungsdauer + " min <br>";
                            if (reply[i].Nebenwirkung != "")
                                p.innerHTML += "<b>Anweisungen:</b> " + reply[i].Action + "<br>";
                            if (reply[i].TotalPrice != undefined)
                                p.innerHTML += "<b>" + reply[i].TotalPrice + "</b><br>";
                            div.appendChild(p);
                            document.getElementById("output").appendChild(div);
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    L07_Hexenkessel.getPotion = getPotion;
    function deleteDatabase(_event) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "https://cocosailer.herokuapp.com/delete";
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _a.sent();
                        document.getElementById("output").innerHTML = "";
                        return [2 /*return*/];
                }
            });
        });
    }
    L07_Hexenkessel.deleteDatabase = deleteDatabase;
})(L07_Hexenkessel || (L07_Hexenkessel = {}));
