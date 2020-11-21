namespace L05_Hexenkessel {

    window.addEventListener("load", handleLoad);
    let anweisung: number = 1;
    let temperature: HTMLInputElement;
    let stir: HTMLInputElement;
    function handleLoad(_event: Event): void {
        
        generateContent(data);
        
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.querySelectorAll("fieldset");

   
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleInfoChange);
            fieldset.addEventListener("input", handleInfoChange);
        }

        let buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll("button");
        for (let i: number = 0; i < buttons.length; i++) {
            let button: HTMLButtonElement = buttons[i];
            button.addEventListener("click", handleInfoChange);
        }
    }

    function handleInfoChange(_event: Event): void {
        let target: HTMLInputElement = <HTMLInputElement>_event.target;

        if (_event.type == "change") {
            switch (target.name) {
                case "Text":
                    console.log(target.value);
                    let title: HTMLHeadingElement = <HTMLHeadingElement>document.getElementById("name");
                    title.innerHTML = "Potion name: " + target.value;
                    break;
                case "Area":
                    let description: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("beschreibung");
                    description.innerHTML = "Description/Risks: " + target.value;
                    break;
                case "DatalistEffect":
                    let effect: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("wirkung");
                    effect.innerHTML = "Effect: " + target.value;
                    break;
                case "DauerStepper":
                    let duration: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("dauer");
                    duration.innerHTML = "Duration of effect: " + target.value + " hours";
                    break;
            }
        }
        else if (_event.type == "input") {
            switch (target.name) {
                case "MengenSlider":
                    let quantity: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("menge");
                    quantity.innerHTML = target.value + " piece(s)/drop(s)";
                    break;
                case "TemperaturSlider":
                    let temp: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("temperatur");
                    temp.innerHTML = target.value;
                    break;
                case "TempEndconditionDur":
                    let tempduration: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("TempEndconditionDur");
                    tempduration.innerHTML = target.value + " min";
                    break;
                case "StirEndconditionDur":
                    let stirduration: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("StirEndconditionDur");
                    stirduration.innerHTML = target.value + " min";
                    break;
                case "intensityslider":
                    let stirintensity: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("intensitywert");
                    stirintensity.innerHTML = target.value;
                case "RadiogroupEndcondition":
                    temperature = target;
                    break;
                case "RadiogroupEndconditionStir":
                    stir = target;
            } 
        }
        else if (_event.type == "click") {
            let instructiondiv: HTMLDivElement = <HTMLDivElement>document.getElementById("anweisungsdiv");
            let p: HTMLParagraphElement = document.createElement("p");
            switch (target.id) {
                
                case "addZutat":
                    let select: HTMLSelectElement = <HTMLSelectElement>document.getElementById("zutatenSelect");
                    let quantity: HTMLInputElement = <HTMLInputElement>document.getElementById("mengenwert");
                    p.innerHTML = anweisung + ". Add " + quantity.innerText + " of " + select.value + ".";
                    instructiondiv.append(p);
                    anweisung += 1;
                    break;

                case "addTempinstruction":
                    let temp: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("temperatur");
                    let tempConditionStr: string = "stop when ";
                    if (temperature.id == "endradio1") {
                        let tempduration: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("TempEndconditionDur");
                        tempConditionStr += tempduration.innerHTML + " have passed.";
                    }
                    else if (temperature.id == "endradio2") {
                        let consistency: HTMLInputElement = <HTMLInputElement>document.getElementById("DatalistConsistencyTemp");
                        tempConditionStr += "the potion has reached a " + consistency.value + " consistency.";
                    }
                    else if (temperature.id == "endradio3") {
                        let color: HTMLInputElement = <HTMLInputElement>document.getElementById("tempcolor");
                        tempConditionStr += "the color of the potion is " + color.value + ".";
                    }

                    p.innerHTML = anweisung + ". Bring temperature to " + temp.innerText + " °C, " + tempConditionStr;
                    instructiondiv.append(p);
                    anweisung += 1;
                    break;

                case "addStir":
                    let stirintensity: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("intensitywert");
                    let stirConditionStr: string = "stop when ";
                    if (stir.id == "endradio1stir") {
                        let tempduration: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById("StirEndconditionDur");
                        stirConditionStr += tempduration.innerHTML + " have passed.";
                    }
                    else if (stir.id == "endradio2stir") {
                        let consistency: HTMLInputElement = <HTMLInputElement>document.getElementById("DatalistConsistencyStir");
                        stirConditionStr += "the potion has reached a " + consistency.value + " consistency.";
                    }
                    else if (stir.id == "endradio3stir") {
                        let color: HTMLInputElement = <HTMLInputElement>document.getElementById("stircolor");
                        stirConditionStr += "the color of the potion is " + color.value + ".";
                    }
                    p.innerHTML = anweisung + ". Stir with an intensity of " + stirintensity.innerText + ", " + stirConditionStr;
                    instructiondiv.append(p);
                    anweisung += 1;
                    break;
            }
        }
    }
}
    export interface Ingredients {
        name: string;
        price: number;
    }

    export let data: Ingredients[] = [
            {name: "spider legs", price: 25},
            {name: "roses", price: 10},
            {name: "Bart Haare", price: 500}];

    export function generateContent(_data: Ingredients[]) {
        console.log(_data);

        
    }
