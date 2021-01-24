var L07_Hexenkessel;
(function (L07_Hexenkessel) {
    //#region client
    L07_Hexenkessel.getData();
    document.getElementById("submit") ? .addEventListener("click", L07_Hexenkessel.sendPotion) : ;
    document.getElementById("retrieve") ? .addEventListener("click", L07_Hexenkessel.getPotion) : ;
    document.getElementById("deleteDatabase") ? .addEventListener("click", L07_Hexenkessel.deleteDatabase) : ;
    //#region handle form
    document.getElementById("formular") ? .addEventListener("change", handleChange) : ;
    document.getElementById("heat") ? .addEventListener("click", handleButton) : ;
    document.getElementById("stir") ? .addEventListener("click", handleButton) : ;
    document.getElementById("ingredients") ? .addEventListener("click", handleButton) : ;
    document.getElementById("delete") ? .addEventListener("click", deleteOne) : ;
    document.getElementById("deleteAll") ? .addEventListener("click", deleteAll) : ;
    //#region handle slider
    document.getElementById("heat_input") ? .addEventListener("input", slider) : ;
    document.getElementById("HeatTime_value") ? .addEventListener("input", slider) : ;
    document.getElementById("stirTime_value") ? .addEventListener("input", slider) : ;
    var total = 0;
    function handleChange(_event) {
        var formData = new FormData(document.forms[0]);
        var basic = document.querySelector("div#basic");
        basic.innerHTML = "<h2>Allgemein</h2>";
        var select = document.querySelector("select");
        var textarea = document.querySelector("textarea");
        for (var _i = 0, formData_1 = formData; _i < formData_1.length; _i++) {
            var entry = formData_1[_i];
            console.log(entry);
            var attribute = document.querySelector("[name='" + entry[0] + "']");
            if (entry[0] != "Trankname" && entry[0] != "Wirkungsdauer")
                continue;
            else if (attribute.value != "" && attribute.value != null)
                basic.innerHTML += attribute.name + ": " + attribute.value + "<br>";
        }
        if (select)
            basic.innerHTML += "Wirkung: " + select.value + "<br>";
        if (textarea.value != "")
            basic.innerHTML += "Beschreibung, Risiken und Nebenwirkungen: <br>" + textarea.value + "<br>";
    }
    function handleButton(_event) {
        var clickedButton = _event.target;
        var formData = new FormData(document.forms[1]);
        var action = document.querySelector("div#action");
        var p = document.createElement("p");
        var div = document.createElement("div");
        div.setAttribute("class", "invisible");
        if (clickedButton.id == "ingredients") {
            var select = document.querySelector("select#Zutaten");
            var value = document.getElementById("Zutaten_value").value;
            var price = parseInt(value) * parseInt(select.selectedOptions[0].getAttribute("price"));
            var priceInString = priceInCurrency(price, false);
            p.innerHTML = "Füge " + value + " Stück/ml " + select.value + " hinzu. (" + priceInString + ") <br>";
            document.getElementById("total").innerHTML = "<b>Gesamtpreis: " + priceInCurrency(total, true) + "</b>";
            /* p.setAttribute("preis", price.toFixed(0)); */
            action.appendChild(p);
        }
        for (var _i = 0, formData_2 = formData; _i < formData_2.length; _i++) {
            var entry = formData_2[_i];
            if (clickedButton.id == "heat") {
                switch (entry[0]) {
                    case "heat":
                        p.innerHTML = "Bringe es auf " + entry[1] + " °C <br>";
                        break;
                    case "heating":
                        switch (entry[1]) {
                            case "Konsistenz":
                                p.innerHTML += "Bis es " + document.querySelector("select#Konsistenz_value").value + " wird. ";
                                break;
                            case "HeatTime":
                                p.innerHTML += "Für " + document.getElementById(entry[1] + "_value").value + " min. ";
                                break;
                            case "Color":
                                p.innerHTML += "Bis solch eine Farbe erreicht wird " + document.getElementById("Color").value.slice(1);
                                break;
                        }
                        break;
                }
            }
            else if (clickedButton.id == "stir") {
                switch (entry[0]) {
                    case "stir":
                        p.innerHTML = "Jetzt " + entry[1] + "<br>";
                    case "stiring":
                        switch (entry[1]) {
                            case "Konsistenz":
                                p.innerHTML += "Bis es " + document.querySelector("select#Konsistenz_stir").value + " wird. ";
                                break;
                            case "stirTime":
                                p.innerHTML += "Für " + document.getElementById(entry[1] + "_value").value + " min. ";
                                break;
                            case "stirColor":
                                console.log(document.getElementById("ColorStiring").value.slice(1));
                                p.innerHTML += "Bis solch eine Farbe erreicht wird " + document.getElementById("ColorStiring").value.slice(1);
                                break;
                        }
                }
            }
            action.appendChild(p);
        }
        document.getElementById("act") ? .appendChild(div) : ;
    }
    function deleteAll() {
        var action = document.querySelector("div#action");
        var act = document.getElementById("act");
        total = 0;
        document.getElementById("total").innerHTML = "<b>Gesamtpreis: " + priceInCurrency(total, true) + "</b>";
        while (action.firstChild)
            action.removeChild(action.firstChild);
        while (act.firstChild)
            act.removeChild(act.firstChild);
    }
    function deleteOne() {
        var action = document.querySelector("div#action");
        var act = document.getElementById("act");
        var p = action.lastChild;
        if (p.hasAttribute("preis")) {
            total -= parseInt(p.getAttribute("preis"));
            document.getElementById("total").innerHTML = "<b>Gesamtpreis: " + priceInCurrency(total, true) + "</b>";
        }
        action.removeChild(action.lastChild);
        act.removeChild(act.lastChild);
    }
    function slider(_event) {
        var x = _event.target.value;
        var y = _event.target.id;
        document.getElementById("bubble" + y).value = x;
    }
    L07_Hexenkessel.slider = slider;
    function priceInCurrency(_price, _total) {
        if (_total == false)
            total += _price;
        var knut;
        var sickel;
        var gallonen;
        if (_price < 29) {
            return _price.toString() + " Knut";
        }
        else if (_price < 493) {
            sickel = Math.floor(_price / 29) + " Sickel";
            knut = Math.floor(_price % 29) + " Knut";
            if (knut == "0 Knut")
                return sickel;
            else
                return sickel + " " + knut;
        }
        else {
            gallonen = Math.floor(_price / 493) + " Gallonen";
            _price %= 493;
            sickel = Math.floor(_price / 29) + " Sickel";
            knut = Math.floor(_price % 29) + " Knut";
            if (sickel == "0 Sickel" && knut == "0 Knut")
                return gallonen;
            else if (sickel == "0 Sickel")
                return gallonen + knut;
            else if (knut == "0 Knut")
                return gallonen + " " + sickel;
            else
                return gallonen + " " + sickel + " " + knut;
        }
    }
})(L07_Hexenkessel || (L07_Hexenkessel = {}));
