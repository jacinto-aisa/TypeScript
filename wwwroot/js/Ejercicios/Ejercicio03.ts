import { IGuerrero, MX7899, TAXIN66, VB98, IFactoriaDeCombate, FactoriaDeCombateBasica } from "../../js/Librerias/Guerreros.js"
let coleccionEjercito: Set<IGuerrero> = new Set<IGuerrero>();
let botonAcumula = document.getElementById("botonAcumula").addEventListener("click", AcumulaUnidad_);

function AcumulaUnidad_()
{
    let MiFactoria: IFactoriaDeCombate = new FactoriaDeCombateBasica(); 
    let UnidadACrear: IGuerrero;
    let elementoSeleccionado = (<HTMLSelectElement>document.getElementById("tiposUnidad")).value;
    switch (elementoSeleccionado) {
        case "MX7899": UnidadACrear = MiFactoria.dameElementoDeCombate(1); break;
        case "VB98": UnidadACrear = MiFactoria.dameElementoDeCombate(2); break;
        case "TAXIN66": UnidadACrear = MiFactoria.dameElementoDeCombate(3); break;
        default: alert("Algo ha pasado");
    }
    
    coleccionEjercito.add(UnidadACrear);
    let totalBlindaje: number = 0;
    let totalPotencia: number = 0;

    coleccionEjercito.forEach(function (valor: IGuerrero) {
        totalBlindaje += valor.blindaje;
        totalPotencia += valor.potencia;
    }

    

    )
    let cadena: string = `Total Unidades ${coleccionEjercito.size} con una potencia de ${totalPotencia} y un blindaje de: ${totalBlindaje}`;
    (<HTMLLabelElement>document.getElementById("resumen")).textContent = cadena;
}