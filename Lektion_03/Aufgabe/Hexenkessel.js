var L04_Hexenkessel;
(function (L04_Hexenkessel) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("Start");
        var form = document.querySelector("div#form");
        var order = document.querySelector("div#order");
        order.addEventListener("change", handleChange);
    }
    function handleChange(_event) {
        var order = document.querySelector("div#order");
        order.innerHTML = " ";
        var formData = new FormData(document.ondragover[0]);
        for (var _i = 0, _a = FormData; _i < _a.length; _i++) {
            var entry = _a[_i];
            var item = document.querySelector("[value='" + entry[1] + "']");
            var price = Number(item.getAttribute("price"));
            order.innerHTML += item.name + " € " + price;
        }
    }
    //function handleChange(_event:Event):void {
    // /let form: HTMLDivElement=<HTMLDivElement>document.querySelector("div#form");
    //form.innerHTML=" ";
    //let formData: FormData = new FormData(document.forms[0]);
    //for (let entry of formData) {
    //let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1]+ "']");
    //let price: number = Number(item.getAttribute("price"));
    //form.innerHTML += item.name + "  € " + price;
    //}
})(L04_Hexenkessel || (L04_Hexenkessel = {}));
