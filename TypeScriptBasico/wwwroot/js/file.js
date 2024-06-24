const nombres = ["Jacinto", "Natalia"];
let apellidos = ["Aisa", "Ibañez"];
let tupla;
tupla = ["Jacinto", 78, true];
var Figuras;
(function (Figuras) {
    Figuras[Figuras["Triangulo"] = 1] = "Triangulo";
    Figuras[Figuras["Circulo"] = 2] = "Circulo";
    Figuras[Figuras["Cuadrado"] = 3] = "Cuadrado";
    Figuras[Figuras["Rectangulo"] = 4] = "Rectangulo";
})(Figuras || (Figuras = {}));
;
var Opciones;
(function (Opciones) {
    Opciones[Opciones["Alta"] = 0] = "Alta";
    Opciones[Opciones["Baja"] = 1] = "Baja";
    Opciones[Opciones["Modificacion"] = 2] = "Modificacion";
    Opciones[Opciones["Listado"] = 3] = "Listado";
})(Opciones || (Opciones = {}));
;
function Muestra(nombre, tipoAccion) {
    switch (tipoAccion) {
        case Opciones.Alta:
        case Opciones.Baja:
        case Opciones.Modificacion:
        case Opciones.Listado:
    }
}
Muestra("Jacinto", Opciones.Alta);
class Automovil {
}
let miCoche = new Automovil();
miCoche.marca = "Seat";
miCoche.cc = 1000;
let miCoche2 = new Automovil();
miCoche.marca = 100;
miCoche.cc = 1000;
//# sourceMappingURL=file.js.map