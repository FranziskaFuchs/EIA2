namespace Hexenkessel {

    export interface Item {
        name: string;
        price: number;
    }

    export interface Data {

        [category: string]: Item[];
    }

    export function generateContant(_data: Data): void {

        console.log(_data);

        for (let category in _data) {
            let ingredients: Item[] = _data[category]; //Über diese Schreibweise _data[category] greif ich in die Schublade z.B. Inkredenzien und hole mir dort die Schlüssel raus [category] also z.B. name und price
            let group: HTMLElement | null = null;
            switch (category) {

                case "Inkredenzien":
                    group = createSelect(ingredients, category);
                    break;
                default:
                    break;

            }


            let fieldset: HTMLFieldSetElement | null = document.querySelector("fieldset#" + category);
            if (fieldset && group) //wenn das Fieldset UND (&&) die Gruppe definiert ist, dann kannst du die group als Kind 
                fieldset.appendChild(group);


        }

    }

    function createSelect(_ingredients: Item[], _category: string): HTMLElement | null {

        let group: HTMLDivElement = document.createElement("div");
        //group.classList.add(_category);
        let selection: HTMLSelectElement = document.createElement("select");
        let legend: HTMLLegendElement = document.createElement("legend");
        selection.name = _category;
        legend.textContent = _category;
        console.log(legend.textContent);
        

        for (let incredient of _ingredients) {
            let option: HTMLOptionElement = document.createElement("option");
            option.setAttribute("price", incredient.price.toFixed(2));
            option.setAttribute("name", incredient.name);
            option.value = option.textContent = incredient.name;
            group.appendChild(legend);
            selection.appendChild(option);
            group.appendChild(selection);



        }
        return group;


    }



















