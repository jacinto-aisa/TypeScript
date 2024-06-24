"use strict";
class Persona {
    primerNombre = "";
    nombreIntermedio = "";
    apellido1 = "";
    apellido2 = "";
    añoNacimiento = 0;
    identificador = "";
    activo = true;
}
let ConfiguradorGeneral = new ConfiguradorEspañolBasico();
let GeneradorHTML = ConfiguradorGeneral.dameGenerador();
let _formulario = document.getElementById("formulario");
if (_formulario != null) {
    _formulario.innerHTML = GeneradorHTML.dameHTML().toString();
}
let _boton = document.getElementById("boton");
if (_boton != null) {
    _boton.addEventListener("click", valida);
}
function valida() {
    let Creador = ConfiguradorGeneral.dameCreador();
    let ValidadorPersona = ConfiguradorGeneral.dameValidador();
    let Mostrador = ConfiguradorGeneral.dameMostrador();
    let MiPersona = Creador.damePersona();
    let _verde = document.getElementById("verde");
    let _rojo = document.getElementById("rojo");
    if (ValidadorPersona.isValid(MiPersona)) {
        if (_verde != null) {
            _verde.innerHTML = Mostrador.dameContenido(MiPersona).toString();
        }
        if (_rojo != null) {
            _rojo.innerHTML = "";
        }
    }
    else {
        if (_rojo != null) {
            _rojo.innerHTML = Mostrador.dameContenido(MiPersona).toString();
        }
        if (_verde != null) {
            _verde.innerHTML = "";
        }
    }
}
