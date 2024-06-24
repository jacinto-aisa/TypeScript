import { Figura, Circulo, Cuadrado, TrianguloEquilatero, IFiguraValida, FiguraValidaPorPerimetro, IFactoria, FactoriaNumerica, FiguraValidaPorSuperficie, FiguraValidaPorAmbos } from "../../js/Librerias/Figuras.js";
let botonCalcula = document.getElementById("botonCalcula").addEventListener("click", CalculaLaFigura);

function CalculaLaFigura() {
    let FiguraACrear: Figura;
    let valor = Number((<HTMLInputElement>document.getElementById("valorEntrada")).value);
    let elementoSeleccionado = (<HTMLSelectElement>document.getElementById("tiposFigura")).value;
    let Validador01: IFiguraValida = new FiguraValidaPorPerimetro();
    let Validador02: IFiguraValida = new FiguraValidaPorSuperficie();
    let ValidadorConjunto: IFiguraValida = new FiguraValidaPorAmbos(Validador02,Validador01);

    let Factoria01: IFactoria = new FactoriaNumerica(ValidadorConjunto);


    switch (elementoSeleccionado) {
        case "Cuadrado": FiguraACrear = Factoria01.dameFigura(1, valor); break;
        case "Triangulo": FiguraACrear = Factoria01.dameFigura(2, valor); break;
        default: FiguraACrear = Factoria01.dameFigura(3,valor);
    }
    document.write(`El area es: ${FiguraACrear.dameSuperficie()} y el perimetro es ${FiguraACrear.damePerimetro()}`);
}


