"use strict";
class MiPrimerHTML {
    g;
    constructor(LibreriaHTML) {
        this.g = LibreriaHTML;
    }
    dameHTML() {
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
class HTMLChurrutero {
    dameDiv(id) {
        return (`<div id='${id}'></div><br/>`);
    }
    dameCss() {
        return "<br />";
    }
    dameBoton(id, texto) {
        return `<input type='button' id=${id} value='${texto}' />`;
    }
    dameCheckBox(id, contenido) {
        return `<input type='checkbox' id='${id}'/><label for='${id}'> ${contenido} </label>`;
    }
    dameTextBox(id, placeholder) {
        return `<input type ='text' id='${id}' placeholder='${placeholder}'/>`;
    }
    dameNumberBox(id, placeholder) {
        return `<input type='number' id='${id}' placeholder='${placeholder}' />`;
    }
}
class HTMLBootStrap {
    dameDiv(id) {
        return (`<div id='${id}' class='form-group col-md-6'></div><br/>`);
    }
    dameCss() {
        return `<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' rel='stylesheet'>`;
    }
    dameBoton(id, texto) {
        return `<input type='button' id=${id} value='${texto}'/>`;
    }
    dameCheckBox(id, contenido) {
        return `<input type='checkbox' id='${id}'/><label for='${id}'> ${contenido} </label>`;
    }
    dameTextBox(id, placeholder) {
        return `<input type ='text' id='${id}' placeholder='${placeholder}' class='form-control'>`;
    }
    dameNumberBox(id, placeholder) {
        return `<input type='number' id='${id}' placeholder='${placeholder}' />`;
    }
}
class MuestraHTML {
    dameContenido(MiPersona) {
        return (`<p> ${MiPersona.primerNombre}  ${MiPersona.apellido1} </p>`);
    }
}
class MuestraHTML2 {
    dameContenido(MiPersona) {
        return (`<p> ${MiPersona.primerNombre}  ${MiPersona.apellido2} </p>`);
    }
}
