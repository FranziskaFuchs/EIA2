var Hexenkessel;
(function (Hexenkessel) {
    function generateContant(_data) {
        console.log(_data);
        for (var category in _data) {
            var ingredients = _data[category]; //Über diese Schreibweise _data[category] greif ich in die Schublade z.B. Inkredenzien und hole mir dort die Schlüssel raus [category] also z.B. name und price
            var group = null;
            switch (category) {
                case "Inkredenzien":
                    group = createSelect(ingredients, category);
                    break;
                default:
                    break;
            }
            var fieldset = document.querySelector("fieldset#" + category);
            if (fieldset && group) //wenn das Fieldset UND (&&) die Gruppe definiert ist, dann kannst du die group als Kind 
                fieldset.appendChild(group);
        }
    }
    Hexenkessel.generateContant = generateContant;
    function createSelect(_ingredients, _category) {
        var group = document.createElement("div");
        //group.classList.add(_category);
        var selection = document.createElement("select");
        var legend = document.createElement("legend");
        selection.name = _category;
        legend.textContent = _category;
        console.log(legend.textContent);
        for (var _i = 0, _ingredients_1 = _ingredients; _i < _ingredients_1.length; _i++) {
            var incredient = _ingredients_1[_i];
            var option = document.createElement("option");
            option.setAttribute("price", incredient.price.toFixed(2));
            option.setAttribute("name", incredient.name);
            option.value = option.textContent = incredient.name;
            group.appendChild(legend);
            selection.appendChild(option);
            group.appendChild(selection);
        }
        return group;
    }
})(Hexenkessel || (Hexenkessel = {}));
