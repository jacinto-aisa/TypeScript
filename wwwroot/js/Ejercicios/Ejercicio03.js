import { FactoriaDeCombateBasica } from "../../js/Librerias/Guerreros.js";
let coleccionEjercito = new Set();
let botonAcumula = document.getElementById("botonAcumula").addEventListener("click", AcumulaUnidad_);
function AcumulaUnidad_() {
    let MiFactoria = new FactoriaDeCombateBasica();
    let UnidadACrear;
    let elementoSeleccionado = document.getElementById("tiposUnidad").value;
    switch (elementoSeleccionado) {
        case "MX7899":
            UnidadACrear = MiFactoria.dameElementoDeCombate(1);
            break;
        case "VB98":
            UnidadACrear = MiFactoria.dameElementoDeCombate(2);
            break;
        case "TAXIN66":
            UnidadACrear = MiFactoria.dameElementoDeCombate(3);
            break;
        default: alert("Algo ha pasado");
    }
    coleccionEjercito.add(UnidadACrear);
    let totalBlindaje = 0;
    let totalPotencia = 0;
    coleccionEjercito.forEach(function (valor) {
        totalBlindaje += valor.blindaje;
        totalPotencia += valor.potencia;
    });
    let cadena = `Total Unidades ${coleccionEjercito.size} con una potencia de ${totalPotencia} y un blindaje de: ${totalBlindaje}`;
    document.getElementById("resumen").textContent = cadena;
}
//# sourceMappingURL=Ejercicio03.js.map