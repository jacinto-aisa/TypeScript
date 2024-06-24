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
export declare class HTMLBootStrapPC implements IHTMLWriter, IHTMLReader {
    Css(): string;
    Div(id: string): string;
    CheckBox(id: string, etiqueta: string): string;
    TextBox(id: string, etiqueta: string): string;
    NumberBox(id: string, etiqueta: string, numMin: number, numMax: number): string;
    ComboBox(id: string, etiqueta: string, opciones: string[]): string;
    TextArea(id: string, etiqueta: string, filas: number): string;
    Boton(id: string, texto: string): string;
    CambiaTextBox(elementoId: string, contenido: string): void;
    CambiaNumero(elementoId: string, contenido: number): void;
    CambiaCheckBox(elementoId: string, marcado: boolean): void;
}
