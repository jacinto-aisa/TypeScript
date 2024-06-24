"use strict";
let listaNombres = ["juan", "pepe", "luisito", "Carmencita"];
let cadena = listaNombres.join("\n");
console.log(cadena);
let listaDeNumeros = [7, 8, 0, 10];
listaDeNumeros.push(89);
listaDeNumeros.push(100);
for (let var01 in listaDeNumeros) {
    console.log(var01.toString());
}
function esPositivo(element, index, array) {
    return element >= 0;
}
if (listaDeNumeros.every(esPositivo)) {
    console.log("todos son positivos");
}
listaDeNumeros.every(function (iterador) { return iterador >= 0; });
function esPar(element, index, array) {
    return element % 2 == 0;
}
let listaFiltrada = listaDeNumeros.filter(esPar);
let listaFiltrada2 = listaDeNumeros.filter(function (value) {
    return (value % 2 == 0);
});
function imprime(element, index, array) {
    return element.toString();
}
listaDeNumeros.forEach(function (value) {
    console.log(value);
});
listaDeNumeros.forEach(imprime);
//# sourceMappingURL=Primitivas.js.map