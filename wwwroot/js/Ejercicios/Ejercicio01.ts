//let ElementoNombreCompleto = document.getElementById("NombreCompleto");
//let NombreCompleto = (<HTMLInputElement>ElementoNombreCompleto).value;
import { Usuario } from "../../js/Librerias/Usuarios.js";
let boton = document.getElementById("boton").addEventListener("click", Comprueba);

function Comprueba() {
    let NombreCompleto = (<HTMLInputElement>document.getElementById("NombreCompleto")).value;
    let NombreUsuario = (<HTMLInputElement>document.getElementById("NombreUsuario")).value;
    let Peso = Number((<HTMLInputElement>document.getElementById("Peso")).value);
    let Altura = Number((<HTMLInputElement>document.getElementById("Altura")).value);

    let Persona: Usuario = new Usuario(NombreCompleto, NombreUsuario, Peso, Altura);
    let IMC: number = Persona.dameIMC();
    (<HTMLInputElement>document.getElementById("imc")).value = IMC.toString();
    let rutaImagen = Persona.dameImagen();
    (<HTMLImageElement>document.getElementById("imagen")).src = rutaImagen;
}
