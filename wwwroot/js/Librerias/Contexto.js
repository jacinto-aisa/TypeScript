import { HTMLBootStrapPC } from "../../js/Librerias/HTML.js";
export class ContextoMetodo {
}
export class ContextoModelBuilder {
    createClassContext(_context) {
        let newContextoModel = new ContextoMetodo();
        newContextoModel.infoContextoNombre = String(_context.name);
        newContextoModel.infoContextoMetadata = String(_context.metadata);
        newContextoModel.infoContextoKind = String(_context.kind);
        return newContextoModel;
    }
    createMethodContext(_context) {
        let newContextoModel = new ContextoMetodo();
        newContextoModel.infoContextoNombre = String(_context.name);
        newContextoModel.infoContextoMetadata = String(_context.metadata);
        newContextoModel.infoContextoKind = String(_context.kind);
        newContextoModel.infoContextoAcceso = Boolean(_context.access);
        newContextoModel.infoContextoEstatica = Boolean(_context.static);
        newContextoModel.infoContextoPrivada = Boolean(_context.private);
        return newContextoModel;
    }
}
export class VisorContextoMetodo {
    constructor(_context) {
        this._context = _context;
        this.LibreriaHTML = new HTMLBootStrapPC();
        this.BuilderContexto = new ContextoModelBuilder();
        this.Contexto = this.BuilderContexto.createMethodContext(_context);
    }
    construyeHTML() {
        return String().concat(this.LibreriaHTML.Css(), this.LibreriaHTML.TextBox("Nombre", "Nombre de Contexto:"), this.LibreriaHTML.TextArea("Metadata", "Metadata de Contexto:", 4), this.LibreriaHTML.TextBox("Kind", "Tipo de Contexto:"), this.LibreriaHTML.CheckBox("Acceso", "Acceso de Contexto:"), this.LibreriaHTML.CheckBox("Privada", "Privada:"), this.LibreriaHTML.CheckBox("Estatica", "Estática:"));
    }
    rellenaInformacion() {
        this.LibreriaHTML.CambiaTextBox("Nombre", this.Contexto.infoContextoNombre);
        this.LibreriaHTML.CambiaTextBox("Metadata", this.Contexto.infoContextoMetadata);
        this.LibreriaHTML.CambiaTextBox("Kind", this.Contexto.infoContextoKind);
        this.LibreriaHTML.CambiaCheckBox("Acceso", this.Contexto.infoContextoAcceso);
        this.LibreriaHTML.CambiaCheckBox("Privada", this.Contexto.infoContextoPrivada);
        this.LibreriaHTML.CambiaCheckBox("Estatica", this.Contexto.infoContextoEstatica);
    }
}
export class VisorContextoClase {
    constructor(_context) {
        this._context = _context;
        this.LibreriaHTML = new HTMLBootStrapPC();
        this.BuilderContexto = new ContextoModelBuilder();
        this.Contexto = this.BuilderContexto.createClassContext(_context);
    }
    construyeHTML() {
        return String().concat(this.LibreriaHTML.Css(), this.LibreriaHTML.TextBox("Nombre", "Nombre de Contexto:"), this.LibreriaHTML.TextArea("Metadata", "Metadata de Contexto:", 4), this.LibreriaHTML.TextBox("Kind", "Tipo de Contexto:"));
    }
    rellenaInformacion() {
        this.LibreriaHTML.CambiaTextBox("Nombre", this.Contexto.infoContextoNombre);
        this.LibreriaHTML.CambiaTextBox("Metadata", this.Contexto.infoContextoMetadata);
        this.LibreriaHTML.CambiaTextBox("Kind", this.Contexto.infoContextoKind);
    }
}
//# sourceMappingURL=Contexto.js.map