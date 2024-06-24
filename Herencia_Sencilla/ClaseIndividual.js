"use strict";
class Persona {
    get edad() {
        return this._edad;
    }
    set edad(edadAux) {
        if (edadAux > 100) {
            this._edad = 100;
        }
        else {
            this._edad = edadAux;
        }
    }
    constructor(nombreAux, apellidoAux, edadAux) {
        this.nombre = "";
        this.apellido = "";
        this._edad = 0;
        this.nombre = nombreAux;
        this.apellido = apellidoAux;
        this.edad = edadAux;
    }
}
let Jacinto = new Persona("Jacinto", "Aisa", 2222222);
Jacinto.edad = 100;
window.alert("JacintoTiene: " + Jacinto.edad.toString());
//# sourceMappingURL=ClaseIndividual.js.map