export interface IGuerrero {
    blindaje: number;
    potencia: number;
}

export class MX7899 implements IGuerrero {
    blindaje: number = 1.4;
    potencia: number = 0;
}

export class VB98 implements IGuerrero {
    blindaje: number = 4.8;
    potencia: number = 9.8;
}

export class TAXIN66 implements IGuerrero {
    blindaje: number = 0;
    potencia: number = 0;
}

export interface IFactoriaDeCombate
{
    dameElementoDeCombate(numero :number): IGuerrero;
}
export class FactoriaDeCombateBasica implements IFactoriaDeCombate {
    dameElementoDeCombate(numero: number): IGuerrero {
        
        switch (numero) {
            case 1: return new MX7899();
            case 2: return new VB98();
            case 3: return new TAXIN66();
            default: return null;
        }
    }
}