

class Persona {
    nombre: string = "";
    apellido: string = "";
    private _edad: number = 0;
    public get edad() {
        return this._edad;
    }
    public set edad(edadAux: number) {
        if (edadAux > 100) {
            this._edad = 100;
        } else {
            this._edad = edadAux;
        }
    }
    constructor(nombreAux: string, apellidoAux: string, edadAux: number) {
        this.nombre = nombreAux;
        this.apellido = apellidoAux;
        this.edad = edadAux;
    }
}

let Jacinto = new Persona("Jacinto", "Aisa", 2222222);
Jacinto.edad = 100;
window.alert("JacintoTiene: " + Jacinto.edad.toString());



