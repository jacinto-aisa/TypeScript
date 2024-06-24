let nombre = "Jacinto";
let apellido = "Aisa";
function concatena(nombre, apellido) {
    return nombre.concat(" ").concat(apellido);
}
function longCadena(cadena) {
    return cadena.length;
}
let numero1 = 8;
let numero2 = 10;
var Operaciones;
(function (Operaciones) {
    Operaciones[Operaciones["Suma"] = 1] = "Suma";
    Operaciones[Operaciones["Resta"] = 2] = "Resta";
    Operaciones[Operaciones["Divide"] = 3] = "Divide";
    Operaciones[Operaciones["Multiplica"] = 4] = "Multiplica";
})(Operaciones || (Operaciones = {}));
;
function ResultadoOperacion(numero1, numero2, operacion) {
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
//# sourceMappingURL=ejercicio01.js.map