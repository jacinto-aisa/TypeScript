export declare class ContextoMetodo {
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
export declare class ContextoModelBuilder implements IContextBuilder {
    createClassContext(_context: ClassDecoratorContext<abstract new (...args: any) => any>): ContextoMetodo;
    createMethodContext(_context: ClassMethodDecoratorContext<unknown, (this: unknown, ...args: any) => any>): ContextoMetodo;
}
export interface IVisorContexto {
    construyeHTML(): string;
    rellenaInformacion(): void;
}
export declare class VisorContextoMetodo implements IVisorContexto {
    private readonly _context;
    private Contexto;
    private readonly LibreriaHTML;
    private readonly BuilderContexto;
    constructor(_context: ClassMethodDecoratorContext);
    construyeHTML(): string;
    rellenaInformacion(): void;
}
export declare class VisorContextoClase implements IVisorContexto {
    private readonly _context;
    private Contexto;
    private readonly LibreriaHTML;
    private readonly BuilderContexto;
    constructor(_context: ClassDecoratorContext);
    construyeHTML(): string;
    rellenaInformacion(): void;
}
