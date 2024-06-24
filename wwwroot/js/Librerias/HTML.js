export class HTMLBootStrapPC {
    Css() {
        return `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>`;
    }
    Div(id) {
        return (`<div id='${id}' class='container col-6 my-3 border border-dark bg-info bg-opacity-25 rounded-3'>`);
    }
    CheckBox(id, etiqueta) {
        return `<div class="form-check form-switch mt-3">
                <input class="form-check-input" type="checkbox" id="${id}" checked>
                <label class="form-check-label" for="${id}">${etiqueta}</label>
            </div>`;
    }
    TextBox(id, etiqueta) {
        return `<div class="input-group mb-3">
                    <span class="input-group-text bg-primary text-white fw-bold">${etiqueta}</span>
                    <input type="text" class="form-control" id="${id}" />
                </div>`;
    }
    NumberBox(id, etiqueta, numMin, numMax) {
        return `<div class="input-group mb-3 w-75">
                    <span class="input-group-text bg-primary text-white fw-bold">${etiqueta}</span>
                    <input type="number" class="form-control" id="${id}" min="${numMin}" max="${numMax}" />
                </div>`;
    }
    ComboBox(id, etiqueta, opciones) {
        let cadena = `<div class="input-group mb-3">
                        <label class="input-group-text bg-primary text-white fw-bold" for="${id}">${etiqueta}</label>
                        <select class="form-select" id="${id}">`;
        for (const element of opciones) {
            cadena += `<option value="${element}">${element}</option>`;
        }
        cadena += `</select>
                </div>`;
        return cadena;
    }
    TextArea(id, etiqueta, filas) {
        return `<div class="input-group mb-3">
                    <span class="input-group-text bg-primary text-white fw-bold">${etiqueta}</span>
                    <textarea class="form-control" id="${id}" aria-label="${etiqueta}" rows="${String(filas)}"></textarea>
                </div>`;
    }
    Boton(id, texto) {
        return `<div class="text-center my-2">
                    <input type="button" id="${id}" class="btn btn-primary my-3" value="${texto}" />
                </div>`;
    }
    CambiaTextBox(elementoId, contenido) {
        document.getElementById(elementoId).value = contenido;
    }
    CambiaNumero(elementoId, contenido) {
        this.CambiaTextBox(elementoId, contenido.toString());
    }
    CambiaCheckBox(elementoId, marcado) {
        document.getElementById(elementoId).checked = marcado;
    }
}
//# sourceMappingURL=HTML.js.map