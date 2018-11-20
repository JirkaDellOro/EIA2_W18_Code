var L05_AssocArraysAndExport;
(function (L05_AssocArraysAndExport) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log(L05_AssocArraysAndExport.data);
        displayHeteroPredef(L05_AssocArraysAndExport.data["reverse"][1]);
        document.body.appendChild(document.createElement("hr"));
        displayHomoVar(L05_AssocArraysAndExport.data);
    }
    function displayHomoVar(_homoVar) {
        for (let key in _homoVar) {
            let value = _homoVar[key];
            console.group(key);
            console.dir(value);
            console.groupEnd();
            for (let i = 0; i < value.length; i++)
                displayHeteroPredef(value[i]);
        }
    }
    function displayHeteroPredef(_heteroPredef) {
        let fieldset = document.createElement("fieldset");
        let legend = document.createElement("legend");
        legend.innerText = _heteroPredef.text;
        fieldset.innerText = _heteroPredef.value + " | " + _heteroPredef.words;
        if (_heteroPredef.truth)
            fieldset.style.color = "red";
        fieldset.appendChild(legend);
        document.body.appendChild(fieldset);
    }
})(L05_AssocArraysAndExport || (L05_AssocArraysAndExport = {}));
//# sourceMappingURL=Main.js.map