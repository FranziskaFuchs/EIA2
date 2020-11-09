namespace L04_Hexenkessel {
    window.addEventListener("load",handleLoad);

function handleLoad(_event: Event): void {
    console.log("Start");
    let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
    let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");

    order.addEventListener("change", handleChange);
  
}
function handleChange(_event:Event):void{
    let order: HTMLDivElement=<HTMLDivElement>document.querySelector("div#order");
    order.innerHTML=" ";

    let formData: FormData = new FormData(document.ondragover[0]);
    for (let entry of <any> FormData){
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1]+ "']");
            let price: number = Number(item.getAttribute("price"));

            order.innerHTML += item.name + " € " + price;
    }
}

//function handleChange(_event:Event):void {
 
//let form: HTMLDivElement=<HTMLDivElement>document.querySelector("div#form");
//form.innerHTML=" ";

//let formData: FormData = new FormData(document.forms[0]);
//for (let entry of formData) {
    //let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1]+ "']");
    //let price: number = Number(item.getAttribute("price"));
   
    //form.innerHTML += item.name + "  € " + price;
//}
}

