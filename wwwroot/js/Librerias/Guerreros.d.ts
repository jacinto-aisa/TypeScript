export interface IGuerrero {
    blindaje: number;
    potencia: number;
}
export declare class MX7899 implements IGuerrero {
    blindaje: number;
    potencia: number;
}
export declare class VB98 implements IGuerrero {
    blindaje: number;
    potencia: number;
}
export declare class TAXIN66 implements IGuerrero {
    blindaje: number;
    potencia: number;
}
export interface IFactoriaDeCombate {
    dameElementoDeCombate(numero: number): IGuerrero;
}
export declare class FactoriaDeCombateBasica implements IFactoriaDeCombate {
    dameElementoDeCombate(numero: number): IGuerrero;
}
