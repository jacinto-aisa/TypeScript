export interface IFiguraValida {
    isValid(AValidar: Figura): boolean;
}
export class FiguraValidaPorSuperficie implements IFiguraValida {
    isValid(AValidar: Figura): boolean {
        return (AValidar.dameSuperficie() > 10);
    }
}
export class FiguraValidaPorPerimetro implements IFiguraValida {
    isValid(AValidar: Figura): boolean {
        return (AValidar.damePerimetro() > 10);
    }
}

export class FiguraValidaPorAmbos implements IFiguraValida {
    constructor(private readonly Condicion1: IFiguraValida, private readonly Condicion2) { }
    isValid(AValidar: Figura): boolean {
        return this.Condicion1.isValid(AValidar) && this.Condicion2.isValid(AValidar);
    }

}

export interface IFactoria {
    dameFigura(numero: number, valor: number): Figura;
    Validador: IFiguraValida;
}

export class FactoriaNumerica implements IFactoria {
    Validador: IFiguraValida;
    
    constructor(Validador: IFiguraValida) {
        this.Validador = Validador;
    }
    dameFigura(numero: number, valor: number): Figura {
        let auxFigura: Figura;
        switch (numero) {
            case 1: auxFigura = new Circulo(valor); break;
            case 2: auxFigura = new Cuadrado(valor); break;
            case 3: auxFigura = new TrianguloEquilatero(valor); break;
            case 4: auxFigura = new RomboEquilatero(valor); break;
        }
        if (this.Validador.isValid(auxFigura))
            return auxFigura;
        else
            return null;
    }
}
export class FactoriaSoloCirculos implements IFactoria {
    Validador: IFiguraValida;
    dameFigura(numero: number, valor: number): Figura {
        return new Circulo(valor);
    }
}


export abstract class Figura {
    public abstract dameSuperficie(): number;
    public abstract damePerimetro(): number;
}

export class Cuadrado extends Figura {
    public dameSuperficie(): number {
        return this.lado * this.lado;
    }
    public damePerimetro(): number {
        return this.lado * 4;
    }
    private readonly lado: number;
    public constructor(lado: number) {
        super();
        this.lado = lado;
    }
}

export class Circulo extends Figura {
    public dameSuperficie(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }
    public damePerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
    private readonly radio: number;
    public constructor(radio: number) {
        super();
        this.radio = radio;
    }
}

export class TrianguloEquilatero extends Figura {
    public dameSuperficie(): number {
        return this.lado * this.lado / 2;
    }
    public damePerimetro(): number {
        return this.lado * 3;
    }
    private readonly lado: number;
    public constructor(lado: number) {
        super();
        this.lado = lado;
    }
}
class RomboEquilatero extends Figura {
    public dameSuperficie(): number {
        return this.lado * this.lado / 2;
    }
    public damePerimetro(): number {
        return this.lado * 3;
    }
    private readonly lado: number;
    public constructor(lado: number) {
        super();
        this.lado = lado;
    }
}


