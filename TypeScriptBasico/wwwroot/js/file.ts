

const nombres: readonly string[] = ["Jacinto","Natalia"];
let apellidos: string[] = ["Aisa", "Ibañez"];

let tupla: [nombre: string, edad:number, cierto: boolean];
tupla = ["Jacinto",78, true];

enum Figuras { Triangulo = 1, Circulo = 2, Cuadrado = 3, Rectangulo };
enum Opciones { Alta, Baja, Modificacion, Listado };

function Muestra(nombre: string, tipoAccion: Opciones) {
    switch (tipoAccion) {
        case Opciones.Alta:
        case Opciones.Baja:
        case Opciones.Modificacion:
        case Opciones.Listado:
    }
}

Muestra("Jacinto", Opciones.Alta);

class Automovil {
    marca: string | number;
    cc: number;
}

let miCoche = new Automovil();
miCoche.marca = "Seat";
miCoche.cc = 1000;
let miCoche2 = new Automovil();
miCoche.marca = 100;
miCoche.cc = 1000;








