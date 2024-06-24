interface IGeneraHTML {
    dameHTML(): string;
}
class MiPrimerHTML implements IGeneraHTML {
    g: ILibreriaHTML;
    constructor(LibreriaHTML: ILibreriaHTML) {
        this.g = LibreriaHTML;
    }
    dameHTML(): string {
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
    dameContenido(MiPersona: Persona): string;
}
class MuestraHTML implements IMuestra {
    dameContenido(MiPersona: Persona): string {
        return (`<p> ${MiPersona.primerNombre}  ${MiPersona.apellido1} </p>`);
    }
}
class MuestraHTML2 implements IMuestra {
    dameContenido(MiPersona: Persona): string {
        return (`<p> ${MiPersona.primerNombre}  ${MiPersona.apellido2} </p>`);
    }
}