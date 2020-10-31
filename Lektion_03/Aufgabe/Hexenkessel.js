var L04_Hexenkessel;
(function (L04_Hexenkessel) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        var form = document.querySelector("div#form");
        form.addEventListener("change", handleChange);
    }
    function handleChange(_event) {
        var order = document.querySelector("div#order");
        order.innerHTML = " ";
        var formData = new FormData(document.forms[0]);
        for (var _i = 0, formData_1 = formData; _i < formData_1.length; _i++) {
            var entry = formData_1[_i];
            var item = document.querySelector("[value='" + entry[1] + "']");
            var price = Number(item.getAttribute("price"));
            order.innerHTML += item.name + "  € " + price;
        }
    }
})(L04_Hexenkessel || (L04_Hexenkessel = {}));
