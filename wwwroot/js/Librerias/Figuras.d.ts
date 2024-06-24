export interface IFiguraValida {
    isValid(AValidar: Figura): boolean;
}
export declare class FiguraValidaPorSuperficie implements IFiguraValida {
    isValid(AValidar: Figura): boolean;
}
export declare class FiguraValidaPorPerimetro implements IFiguraValida {
    isValid(AValidar: Figura): boolean;
}
export declare class FiguraValidaPorAmbos implements IFiguraValida {
    private readonly Condicion1;
    private readonly Condicion2;
    constructor(Condicion1: IFiguraValida, Condicion2: any);
    isValid(AValidar: Figura): boolean;
}
export interface IFactoria {
    dameFigura(numero: number, valor: number): Figura;
    Validador: IFiguraValida;
}
export declare class FactoriaNumerica implements IFactoria {
    Validador: IFiguraValida;
    constructor(Validador: IFiguraValida);
    dameFigura(numero: number, valor: number): Figura;
}
export declare class FactoriaSoloCirculos implements IFactoria {
    Validador: IFiguraValida;
    dameFigura(numero: number, valor: number): Figura;
}
export declare abstract class Figura {
    abstract dameSuperficie(): number;
    abstract damePerimetro(): number;
}
export declare class Cuadrado extends Figura {
    dameSuperficie(): number;
    damePerimetro(): number;
    private readonly lado;
    constructor(lado: number);
}
export declare class Circulo extends Figura {
    dameSuperficie(): number;
    damePerimetro(): number;
    private readonly radio;
    constructor(radio: number);
}
export declare class TrianguloEquilatero extends Figura {
    dameSuperficie(): number;
    damePerimetro(): number;
    private readonly lado;
    constructor(lado: number);
}
