import { HTMLBootStrapPC, IHTMLReader, IHTMLWriter } from "../../js/Librerias/HTML.js";
export class ContextoMetodo {
    infoContextoNombre: string;
    infoContextoMetadata: string;
    infoContextoKind: string;
    infoContextoAcceso: boolean;
    infoContextoEstatica: boolean;
    infoContextoPrivada: boolean;
}
export interface IContextBuilder {
    createMethodContext(_context: ClassMethodDecoratorContext): ContextoMetodo;
    createClassContext(_context: ClassDecoratorContext): ContextoMetodo;
}
export class ContextoModelBuilder implements IContextBuilder {
    createClassContext(_context: ClassDecoratorContext<abstract new (...args: any) => any>): ContextoMetodo {
        let newContextoModel: ContextoMetodo = new ContextoMetodo();
        newContextoModel.infoContextoNombre = String(_context.name);
        newContextoModel.infoContextoMetadata = String(_context.metadata);
        newContextoModel.infoContextoKind = String(_context.kind);
        return newContextoModel;
    }
    createMethodContext(_context: ClassMethodDecoratorContext<unknown, (this: unknown, ...args: any) => any>): ContextoMetodo {
        let newContextoModel: ContextoMetodo = new ContextoMetodo();
        newContextoModel.infoContextoNombre = String(_context.name);
        newContextoModel.infoContextoMetadata = String(_context.metadata);
        newContextoModel.infoContextoKind = String(_context.kind);
        newContextoModel.infoContextoAcceso = Boolean(_context.access);
        newContextoModel.infoContextoEstatica = Boolean(_context.static);
        newContextoModel.infoContextoPrivada = Boolean(_context.private);
        return newContextoModel;
      }
    }
export interface IVisorContexto {
    construyeHTML(): string;
    rellenaInformacion(): void;
}
export class VisorContextoMetodo implements IVisorContexto{
    private Contexto :ContextoMetodo; 
    private readonly LibreriaHTML :IHTMLWriter = new HTMLBootStrapPC();
    private readonly BuilderContexto: IContextBuilder = new ContextoModelBuilder();
    constructor(private readonly _context: ClassMethodDecoratorContext)
    {
        this.Contexto = this.BuilderContexto.createMethodContext(_context);
    }

    public construyeHTML(): string {
        return String().concat(
            this.LibreriaHTML.Css(), 
            this.LibreriaHTML.TextBox("Nombre", "Nombre de Contexto:"),
            this.LibreriaHTML.TextArea("Metadata", "Metadata de Contexto:", 4),
            this.LibreriaHTML.TextBox("Kind", "Tipo de Contexto:"),
            this.LibreriaHTML.CheckBox("Acceso", "Acceso de Contexto:"),
            this.LibreriaHTML.CheckBox("Privada", "Privada:"),
            this.LibreriaHTML.CheckBox("Estatica", "Estática:")
        );
    }
    public rellenaInformacion(): void {
        (this.LibreriaHTML as unknown as IHTMLReader).CambiaTextBox("Nombre", this.Contexto.infoContextoNombre);
        (this.LibreriaHTML as unknown as IHTMLReader).CambiaTextBox("Metadata", this.Contexto.infoContextoMetadata);
        (this.LibreriaHTML as unknown as IHTMLReader).CambiaTextBox("Kind", this.Contexto.infoContextoKind);

        (this.LibreriaHTML as unknown as IHTMLReader).CambiaCheckBox("Acceso", this.Contexto.infoContextoAcceso);
        (this.LibreriaHTML as unknown as IHTMLReader).CambiaCheckBox("Privada", this.Contexto.infoContextoPrivada);
        (this.LibreriaHTML as unknown as IHTMLReader).CambiaCheckBox("Estatica", this.Contexto.infoContextoEstatica);
    }
}

export class VisorContextoClase implements IVisorContexto {
    private Contexto: ContextoMetodo;
    private readonly LibreriaHTML: IHTMLWriter = new HTMLBootStrapPC();
    private readonly BuilderContexto: IContextBuilder = new ContextoModelBuilder();
    constructor(private readonly _context: ClassDecoratorContext) {
        this.Contexto = this.BuilderContexto.createClassContext(_context);
    }

    public construyeHTML(): string {
        return String().concat(
            this.LibreriaHTML.Css(),
            this.LibreriaHTML.TextBox("Nombre", "Nombre de Contexto:"),
            this.LibreriaHTML.TextArea("Metadata", "Metadata de Contexto:", 4),
            this.LibreriaHTML.TextBox("Kind", "Tipo de Contexto:"),
        );
    }
    public rellenaInformacion(): void {
        (this.LibreriaHTML as unknown as IHTMLReader).CambiaTextBox("Nombre", this.Contexto.infoContextoNombre);
        (this.LibreriaHTML as unknown as IHTMLReader).CambiaTextBox("Metadata", this.Contexto.infoContextoMetadata);
        (this.LibreriaHTML as unknown as IHTMLReader).CambiaTextBox("Kind", this.Contexto.infoContextoKind);
    }
}