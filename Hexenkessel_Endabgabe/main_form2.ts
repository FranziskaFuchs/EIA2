namespace Feuerwerk{
    console.log("main_form");

    window.addEventListener("load",handleLoadForm);

    function handleLoadForm(_event:Event): void{ 
    let form: HTMLDivElement =<HTMLDivElement>document.querySelector("div#form");
    let sliderExplosion: HTMLInputElement = <HTMLInputElement>document.querySelector("input#explosionSize");
    let sliderLifetime: HTMLInputElement = <HTMLInputElement>document.querySelector("input#lifetime");
    let sliderAmount: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");
    let sliderParticleSize: HTMLInputElement = <HTMLInputElement>document.querySelector("input#ParticleSize");
    let submitBtn: HTMLButtonElement;
    let rocketlist: HTMLDivElement;

    form.addEventListener("change",handleChange);
    sliderExplosion.addEventListener("input",displayExplosion);
    sliderLifetime.addEventListener("input",displayLifetime);
    sliderAmount.addEventListener("input",displayAmount);
    sliderParticleSize.addEventListener("input",displayParticleSize);

    }

    function handleChange(_event:Event): void{
        let rocketlist: HTMLDivElement = <HTMLDivElement>document.querySelector("div#rocketlist");
        rocketlist.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);
        for (let entry of formData.entries()){
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']");

            rocketlist.innerHTML += item.name;
    }

    function displayLifetime(_event:Event): void {
        let lifetime: string = (<HTMLInputElement>_event.target).value;
    
    }
    function displayAmount(_event:Event): void {
        let amount: string = (<HTMLInputElement>_event.target).value;
    }
    function displayParticleSize(_event:Event): void {
        let particleSize: string = (<HTMLInputElement>_event.target).value;
    }
    function displayExplosion(_event:Event): void {
        let explosion: string = (<HTMLInputElement>_event.target).value;
    }
}

