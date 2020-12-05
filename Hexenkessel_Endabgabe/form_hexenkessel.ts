namespace Hexenkessel {

    window.addEventListener("load", handleLoad);
    let form: HTMLFormElement;
    let deleteBtn: HTMLButtonElement;
    let submitBtn: HTMLButtonElement;
    let transferBtn: HTMLButtonElement;
    let loadBtn: HTMLButtonElement;
    let orders: HTMLDivElement;
    let promptName: string;
    let serverPage: string = "https://hogwartsrecipes.herokuapp.com";   //"http://localhost:5001/"; 


    async function handleLoad(_event: Event): Promise<void> {
        promptName = <string>prompt("Willkomen lieber Zauberschüler! Wie heißt du?");

        let response: Response = await fetch("data.json"); // fetch ausgeführt und Antwort (response) erhalten
        let listOfIncredients: string = await response.text(); //Antwort(response) in Text umgewandelt
        let data: Data = JSON.parse(listOfIncredients); // den umgewandelten Text mit parse für den Client übersetzt

        generateContant(data);

        form = <HTMLFormElement>document.querySelector("form#orderform");
        orders = <HTMLDivElement>document.querySelector("div#orders");
        submitBtn = <HTMLButtonElement>document.querySelector("button#send_Btn");
        deleteBtn = <HTMLButtonElement>document.querySelector("button#del_Btn");
        transferBtn = <HTMLButtonElement>document.querySelector("button#transfer_Btn");
        loadBtn = <HTMLButtonElement>document.querySelector("button#loadBtn");
        submitBtn.addEventListener("click", sendOrder);
        deleteBtn.addEventListener("click", deleteOrder);
        transferBtn.addEventListener("click", handleChange);
        //loadBtn.addEventListener("click", retrieveOrders);

    }


    function handleChange(_event: Event): void {

        let formData: FormData = new FormData(document.forms[0]);

        for (let entry of formData) {

            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']"); // Mit der eckigen Klammer kann ich Attribute suchen, hier value. Im entry[1] steht der Value hier z.b. Brot oder Edeka
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
                    let itemPrice: number = Number(item.getAttribute("price")); // holt sich aus variablen item den Price und formatiert das was in der Klammer steht zu einer Nummer
                    orders.innerHTML += "<p>" + "Der Gesamtpreis beträgt" + " " + itemPrice.toFixed(2) + " Sikel" + "<br>";


            }


        }


    }



    async function sendOrder(_event: Event): Promise<void> {
        console.log("Der Button Senden wurde gedrückt");
        let formData: FormData = new FormData(form);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let response: Response = await fetch(serverPage + "?" + query.toString());
        let responseText: string = await response.text();
        query.append("name of wizard", promptName);
        alert("Hallo " + promptName + "\n\r" + " folgendes Rezept wurde an Hogwarts gesendet " + "\n\r" + responseText);
        location.reload();

    }

    function deleteOrder(_event: Event): void {
        console.log("Delete Order");
        location.reload();

    }


  




























