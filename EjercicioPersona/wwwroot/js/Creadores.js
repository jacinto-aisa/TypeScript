"use strict";
class CreadorManualEspañol {
    damePersona() {
        let MiPersona = new Persona();
        MiPersona.primerNombre = "Jacinto";
        MiPersona.nombreIntermedio = "";
        MiPersona.apellido1 = "Aisa";
        MiPersona.apellido2 = "Ibañez";
        MiPersona.añoNacimiento = 2000;
        MiPersona.identificador = "2323232";
        MiPersona.activo = true;
        return MiPersona;
    }
}
class CreadorHTML {
    damePersona() {
        let MiPersona = new Persona();
        MiPersona.primerNombre = this.dameValorTexto("nombre1");
        MiPersona.nombreIntermedio = this.dameValorTexto("nombreIntermedio");
        MiPersona.apellido1 = this.dameValorTexto("apellido1");
        MiPersona.apellido2 = this.dameValorTexto("apellido2");
        MiPersona.identificador = this.dameValorTexto("identificativo");
        MiPersona.añoNacimiento = this.dameValorNumero("nac");
        MiPersona.activo = this.dameValorBooleano("activo");
        return MiPersona;
    }
    dameValorNumero(elementoId) {
        return Number(this.dameValorTexto(elementoId));
    }
    dameValorBooleano(elementoId) {
        return document.getElementById(elementoId).checked;
    }
    dameValorTexto(elementoId) {
        return document.getElementById(elementoId).value;
    }
}
