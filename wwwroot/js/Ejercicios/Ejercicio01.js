//let ElementoNombreCompleto = document.getElementById("NombreCompleto");
//let NombreCompleto = (<HTMLInputElement>ElementoNombreCompleto).value;
import { Usuario } from "../../js/Librerias/Usuarios.js";
let boton = document.getElementById("boton").addEventListener("click", Comprueba);
function Comprueba() {
    let NombreCompleto = document.getElementById("NombreCompleto").value;
    let NombreUsuario = document.getElementById("NombreUsuario").value;
    let Peso = Number(document.getElementById("Peso").value);
    let Altura = Number(document.getElementById("Altura").value);
    let Persona = new Usuario(NombreCompleto, NombreUsuario, Peso, Altura);
    let IMC = Persona.dameIMC();
    document.getElementById("imc").value = IMC.toString();
    let rutaImagen = Persona.dameImagen();
    document.getElementById("imagen").src = rutaImagen;
}
//# sourceMappingURL=Ejercicio01.js.map