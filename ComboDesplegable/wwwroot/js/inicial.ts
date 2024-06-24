let contadorDeCiudades = 0;
let selectorCiudades = (<HTMLSelectElement>document.getElementById('Ciudades'));
selectorCiudades.addEventListener("change", seleccionado);
function seleccionado() {
    contadorDeCiudades++;
    let ciudadSeleccionada = (<HTMLSelectElement>document.getElementById('Ciudades')).value;
    (<HTMLInputElement>document.getElementById('ciudad')).value = ciudadSeleccionada;
    (<HTMLInputElement>document.getElementById('contaje')).value = contadorDeCiudades.toString();
}