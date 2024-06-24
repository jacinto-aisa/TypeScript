var contadorDeCiudades = 0;
var selectorCiudades = document.getElementById('Ciudades');
selectorCiudades.addEventListener("change", seleccionado);
function seleccionado() {
    contadorDeCiudades++;
    var ciudadSeleccionada = document.getElementById('Ciudades').value;
    document.getElementById('ciudad').value = ciudadSeleccionada;
    document.getElementById('contaje').value = contadorDeCiudades.toString();
}
//# sourceMappingURL=inicial.js.map