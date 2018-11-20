namespace L05_AssocArraysAndExport {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        // alle Daten in der Konsole ausgeben. Bitte dort zuerst mal nachschauen!
        console.log(data);
        
        // von den Datensätzen, die unter dem Schlüssel "reverse" zu finden sind, den zweiten im DOM darstellen
        displayHeteroPredef(data["reverse"][1]);

        // das hier ist uninteressant, nur eine horizontale Linie zur optischen Trennung
        document.body.appendChild(document.createElement("hr"));
        
        // alle Daten im DOM darstellen
        displayHomoVar(data);
    }

    function displayHomoVar(_homoVar: HomoVar): void {
        // mit diesem Schleifenkonstrukt wird über alle Schlüssel iteriert (Typannotation ist hier nicht erlaubt)
        for (let key in _homoVar) {
            // zwischenspeichern des Werts, der mit Schlüssel assoziiert ist
            let value: HeteroPredef[] = _homoVar[key];
            // hübsche Sachen, die man mit der Konsole noch machen kann
            console.group(key);
            console.dir(value);
            console.groupEnd();
            // der Wert ist ein Array, also wird noch darüber iteriert
            for (let i: number = 0; i < value.length; i++)
                // und die einzelnen Datensätze darin ausgegeben
                displayHeteroPredef(value[i]);
        }
    }

    function displayHeteroPredef(_heteroPredef: HeteroPredef): void {
        let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
        let legend: HTMLLegendElement = document.createElement("legend");
        // was unter dem Schlüssel text abgelegt ist, wird für die Fieldset-Legende genommen
        legend.innerText = _heteroPredef.text;

        // was unter value und words zu finden ist, als Inhalt
        fieldset.innerText = _heteroPredef.value + " | " + _heteroPredef.words;
        // und wenn truth wahr ist, soll der Text rot dargestellt werden
        if (_heteroPredef.truth)
            fieldset.style.color = "red";

        fieldset.appendChild(legend);
        document.body.appendChild(fieldset);
    }
} 