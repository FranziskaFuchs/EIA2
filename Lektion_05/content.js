var cauldron;
(function (cauldron) {
    function generateContent(_data) {
        console.log(_data);
        var selectbox = document.getElementById("zutatenSelect");
        for (var _i = 0, _data_1 = _data; _i < _data_1.length; _i++) {
            var ingredient = _data_1[_i];
            console.log(ingredient);
            console.log(ingredient.price);
            var option = document.createElement("option");
            option.value = ingredient.name;
            option.innerText = ingredient.name;
            option.setAttribute("price", ingredient.price.toFixed(2));
            option.setAttribute("name", ingredient.name);
            if (selectbox)
                selectbox.appendChild(option);
        }
    }
    cauldron.generateContent = generateContent;
})(cauldron || (cauldron = {}));
