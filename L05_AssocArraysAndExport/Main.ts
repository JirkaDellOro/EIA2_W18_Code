namespace L05_AssocArraysAndExport {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log(data);
        displayHeteroPredef(data["reverse"][1]);
        document.body.appendChild(document.createElement("hr"));
        displayHomoVar(data);
    }

    function displayHomoVar(_homoVar: HomoVar): void {
        for (let key in _homoVar) {
            let value: HeteroPredef[] = _homoVar[key];
            console.group(key);
            console.dir(value);
            console.groupEnd();
            for (let i: number = 0; i < value.length; i++)
                displayHeteroPredef(value[i]);
        }
    }

    function displayHeteroPredef(_heteroPredef: HeteroPredef): void {
        let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
        let legend: HTMLLegendElement = document.createElement("legend");
        legend.innerText = _heteroPredef.text;

        fieldset.innerText = _heteroPredef.value + " | " + _heteroPredef.words;
        if (_heteroPredef.truth)
            fieldset.style.color = "red";

        fieldset.appendChild(legend);
        document.body.appendChild(fieldset);
    }
} 