import { FiguraValidaPorPerimetro, FactoriaNumerica, FiguraValidaPorSuperficie, FiguraValidaPorAmbos } from "../../js/Librerias/Figuras.js";
let botonCalcula = document.getElementById("botonCalcula").addEventListener("click", CalculaLaFigura);
function CalculaLaFigura() {
    let FiguraACrear;
    let valor = Number(document.getElementById("valorEntrada").value);
    let elementoSeleccionado = document.getElementById("tiposFigura").value;
    let Validador01 = new FiguraValidaPorPerimetro();
    let Validador02 = new FiguraValidaPorSuperficie();
    let ValidadorConjunto = new FiguraValidaPorAmbos(Validador02, Validador01);
    let Factoria01 = new FactoriaNumerica(ValidadorConjunto);
    switch (elementoSeleccionado) {
        case "Cuadrado":
            FiguraACrear = Factoria01.dameFigura(1, valor);
            break;
        case "Triangulo":
            FiguraACrear = Factoria01.dameFigura(2, valor);
            break;
        default: FiguraACrear = Factoria01.dameFigura(3, valor);
    }
    document.write(`El area es: ${FiguraACrear.dameSuperficie()} y el perimetro es ${FiguraACrear.damePerimetro()}`);
}
//# sourceMappingURL=Ejercicio02.js.map