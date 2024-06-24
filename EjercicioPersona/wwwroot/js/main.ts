<<<<<<< HEAD
﻿class Persona {
=======
﻿interface IGeneraHTML {
    dameHTML(): String;
}
class MiPrimerHTML implements IGeneraHTML {
    g: ILibreriaHTML;
    constructor(LibreriaHTML: ILibreriaHTML) {
        this.g = LibreriaHTML;
    }
    dameHTML(): String {
        let contenido = this.g.dameCss();
        contenido += this.g.dameDiv("formulario");
        contenido += "<br />";
        contenido += this.g.dameTextBox("nombre1", "nombre");
        contenido += this.g.dameTextBox("nombreIntermedio", "intermedio");
        contenido += this.g.dameTextBox("apellido1", "apellido1");
        contenido += this.g.dameTextBox("apellido2", "apellido2");
        contenido += "<br />";
        contenido += this.g.dameTextBox("identificativo", "identificativo");
        contenido += this.g.dameNumberBox("nac", "año nacimiento");
        contenido += this.g.dameCheckBox("activo", "Activo");
        contenido += this.g.dameBoton("boton", "Dale");
        return contenido;
    }
}
interface IConfigurable {
    dameGenerador(): IGeneraHTML;
    dameCreador(): IPersonable;
    dameValidador(): IValidable;
    dameMostrador(): IMuestra;
}
class ConfiguradorEspañolBasico implements IConfigurable {
    dameGenerador(): IGeneraHTML {
        return new MiPrimerHTML(new HTMLBootStrap());
    }
    dameCreador(): IPersonable {
        return new CreadorHTML();
    }
    dameValidador(): IValidable {
        return new ValidadorIngles();
    }
    dameMostrador(): IMuestra {
        return new MuestraHTML();
    }
    
    class ConfiguradorAdjunto implements IConfigurable {
    dameGenerador(): IGeneraHTML {
        return new MiPrimerHTML(new HTMLBootStrap());
    }
    dameCreador(): IPersonable {
        return new CreadorHTML();
    }
    dameValidador(): IValidable {
        return new ValidadorEspañol();
    }
    dameMostrador(): IMuestra {
        return new MuestraHTML2();
    }




}
interface IPersonable {
    damePersona(): Persona;
}


class CreadorManualEspañol implements IPersonable {
    damePersona(): Persona {
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

class CreadorHTML implements IPersonable {
    damePersona(): Persona {
        let MiPersona: Persona = new Persona();
        MiPersona.primerNombre = this.dameValorTexto("nombre1");
        MiPersona.nombreIntermedio = this.dameValorTexto("nombreIntermedio");
        MiPersona.apellido1 = this.dameValorTexto("apellido1");
        MiPersona.apellido2 = this.dameValorTexto("apellido2");
        MiPersona.identificador = this.dameValorTexto("identificativo");
        MiPersona.añoNacimiento = this.dameValorNumero("nac");
        MiPersona.activo = this.dameValorBooleano("activo");
        return MiPersona;
    }

    private dameValorNumero(elementoId: string): number {
        return Number(this.dameValorTexto(elementoId));
    }
    private dameValorBooleano(elementoId: string): boolean {
        return (<HTMLInputElement>document.getElementById(elementoId)).checked;
    }
    private dameValorTexto(elementoId: string) {
        return (<HTMLInputElement>document.getElementById(elementoId)).value;
    }
}

interface ILibreriaHTML {
    dameCss(): string;
    dameTextBox(id: string, placeholder: string): string;
    dameNumberBox(id: string, placeholder: string): string;
    dameCheckBox(id: string, contenido: string): string;
    dameBoton(id: string, texto: string): string;
    dameDiv(id: string): string;
}
class HTMLChurrutero implements ILibreriaHTML {
    public dameDiv(id: string): string {
        return (`<div id='${id}'></div><br/>`);
    }
    public dameCss(): string {
        return "<br />";
    }
    public dameBoton(id: string, texto: string): string {
        return `<input type='button' id=${id} value='${texto}' />`;
    }
    public dameCheckBox(id: string, contenido: string): string {
        return `<input type='checkbox' id='${id}'/><label for='${id}'> ${contenido} </label>`;
    }
    public dameTextBox(id: string, placeholder: string): string {
        return `<input type ='text' id='${id}' placeholder='${placeholder}'/>`;
    }
    public dameNumberBox(id: string, placeholder: string): string {
        return `<input type='number' id='${id}' placeholder='${placeholder}' />`;
    }
}
class HTMLBootStrap implements ILibreriaHTML {
    public dameDiv(id: string): string {
        return (`<div id='${id}' class='form-group col-md-6'></div><br/>`);
    }
    public dameCss(): string {
        return `<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet'>`;
    }
    public dameBoton(id: string, texto: string): string {
        return `<input type='button' id=${id} value='${texto}'/>`;
    }
    public dameCheckBox(id: string, contenido: string): string {
        return `<input type='checkbox' id='${id}'/><label for='${id}'> ${contenido} </label>`;
    }
    public dameTextBox(id: string, placeholder: string): string {
        return `<input type ='text' id='${id}' placeholder='${placeholder}' class='form-control'>`;
    }
    public dameNumberBox(id: string, placeholder: string): string {
        return `<input type='number' id='${id}' placeholder='${placeholder}' />`;
    }

}
interface IMuestra {
    dameContenido(MiPersona: Persona): String;
}
class MuestraHTML implements IMuestra {
    dameContenido(MiPersona: Persona): String {
        return (`<p> ${MiPersona.primerNombre}  ${MiPersona.apellido1} </p>`);
    }
}
class MuestraHTML2 implements IMuestra {
    dameContenido(MiPersona: Persona): String {
        return (`<p> ${MiPersona.primerNombre}  ${MiPersona.apellido2} </p>`);
    }
}
class Persona {
>>>>>>> ce05099ca0648708edb7638a61157d89a5fb8d2d
    primerNombre: string = "";
    nombreIntermedio: string = "";
    apellido1: string = "";
    apellido2: string = "";
    añoNacimiento: number = 0;
    identificador: string = "";
    activo: boolean = true;
}
let ConfiguradorGeneral: IConfigurable = new ConfiguradorEspañolBasico();
let GeneradorHTML: IGeneraHTML = ConfiguradorGeneral.dameGenerador();
let _formulario = document.getElementById("formulario");
if (_formulario != null) {
    _formulario.innerHTML = GeneradorHTML.dameHTML().toString();
}
let _boton = document.getElementById("boton");
if (_boton != null) {
    _boton.addEventListener("click", valida);
}

function valida() {

    let Creador: IPersonable = ConfiguradorGeneral.dameCreador();
    let ValidadorPersona: IValidable = ConfiguradorGeneral.dameValidador();
    let Mostrador: IMuestra = ConfiguradorGeneral.dameMostrador();

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
