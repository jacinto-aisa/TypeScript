export interface IHTMLWriter {
    Css(): string;
    Div(id: string): string;
    TextBox(id: string, etiqueta: string): string;
    NumberBox(id: string, etiqueta: string, numMin: number, numMax: number): string;
    CheckBox(id: string, etiqueta: string): string;
    ComboBox(id: string, etiqueta: string, opciones: string[]): string;
    TextArea(id: string, etiqueta: string, filas: number): string;
    Boton(id: string, texto: string): string;
}
export interface IHTMLReader {
    CambiaTextBox(elementoId: string, contenido: string): void;
    CambiaNumero(elementoId: string, contenido: number): void;
    CambiaCheckBox(elementoId: string, marcado: boolean): void;
}

export class HTMLBootStrapPC implements IHTMLWriter,IHTMLReader {

    public Css(): string {
        return `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>`;
    }
    public Div(id: string): string {
        return (`<div id='${id}' class='container col-6 my-3 border border-dark bg-info bg-opacity-25 rounded-3'>`);
    }
    public CheckBox(id: string, etiqueta: string): string {
        return `<div class="form-check form-switch mt-3">
                <input class="form-check-input" type="checkbox" id="${id}" checked>
                <label class="form-check-label" for="${id}">${etiqueta}</label>
            </div>`;
    }
    public TextBox(id: string, etiqueta: string): string {
        return `<div class="input-group mb-3">
                    <span class="input-group-text bg-primary text-white fw-bold">${etiqueta}</span>
                    <input type="text" class="form-control" id="${id}" />
                </div>`;
    }
    public NumberBox(id: string, etiqueta: string, numMin: number, numMax: number): string {
        return `<div class="input-group mb-3 w-75">
                    <span class="input-group-text bg-primary text-white fw-bold">${etiqueta}</span>
                    <input type="number" class="form-control" id="${id}" min="${numMin}" max="${numMax}" />
                </div>`;
    }
    public ComboBox(id: string, etiqueta: string, opciones: string[]): string {
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
    public TextArea(id: string, etiqueta: string, filas: number): string {
        return `<div class="input-group mb-3">
                    <span class="input-group-text bg-primary text-white fw-bold">${etiqueta}</span>
                    <textarea class="form-control" id="${id}" aria-label="${etiqueta}" rows="${String(filas)}"></textarea>
                </div>`;
    }
    public Boton(id: string, texto: string): string {
        return `<div class="text-center my-2">
                    <input type="button" id="${id}" class="btn btn-primary my-3" value="${texto}" />
                </div>`;
    }
    public CambiaTextBox(elementoId: string, contenido: string): void {
        (<HTMLInputElement>document.getElementById(elementoId)).value = contenido;
    }

    public CambiaNumero(elementoId: string, contenido: number): void {
        this.CambiaTextBox(elementoId, contenido.toString());
    }
    public CambiaCheckBox(elementoId: string, marcado: boolean): void {
        (<HTMLInputElement>document.getElementById(elementoId)).checked = marcado;
    }
} 