let nombre: string = "Jacinto";
let apellido: string = "Aisa";

function concatena(nombre: string, apellido: string) : string{
    return nombre.concat(" ").concat(apellido);
}

function longCadena(cadena: string): number {
    return cadena.length;
}

let numero1: number = 8;
let numero2: number = 10;

enum Operaciones { Suma=1, Resta=2, Divide=3, Multiplica=4 };

function ResultadoOperacion(numero1: number, numero2: number, operacion: Operaciones):number {
    switch (operacion) {
        case Operaciones.Suma: return numero1 + numero2;
        case Operaciones.Resta: return numero1 - numero2;
        case Operaciones.Divide: return numero1 / numero2;
        case Operaciones.Multiplica: return numero1 * numero2;
    }
}
document.writeln("<ul>");
document.writeln("<li> La suma es " + ResultadoOperacion(numero1, numero2, Operaciones.Suma) + "</li><br/>");
document.writeln(`<li> La resta es ${ResultadoOperacion(numero1, numero2, Operaciones.Resta)} </li><br/>`);
document.writeln("<li> La multiplicacion es: ".concat(ResultadoOperacion(numero1, numero2, Operaciones.Multiplica).toString()).concat("</li><br/>"));
document.writeln("<li> La division es: " + ResultadoOperacion(numero1, numero2, Operaciones.Divide) + "</li><br/>");
document.writeln("</ul>");
