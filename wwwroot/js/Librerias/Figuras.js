export class FiguraValidaPorSuperficie {
    isValid(AValidar) {
        return (AValidar.dameSuperficie() > 10);
    }
}
export class FiguraValidaPorPerimetro {
    isValid(AValidar) {
        return (AValidar.damePerimetro() > 10);
    }
}
export class FiguraValidaPorAmbos {
    constructor(Condicion1, Condicion2) {
        this.Condicion1 = Condicion1;
        this.Condicion2 = Condicion2;
    }
    isValid(AValidar) {
        return this.Condicion1.isValid(AValidar) && this.Condicion2.isValid(AValidar);
    }
}
export class FactoriaNumerica {
    constructor(Validador) {
        this.Validador = Validador;
    }
    dameFigura(numero, valor) {
        let auxFigura;
        switch (numero) {
            case 1:
                auxFigura = new Circulo(valor);
                break;
            case 2:
                auxFigura = new Cuadrado(valor);
                break;
            case 3:
                auxFigura = new TrianguloEquilatero(valor);
                break;
            case 4:
                auxFigura = new RomboEquilatero(valor);
                break;
        }
        if (this.Validador.isValid(auxFigura))
            return auxFigura;
        else
            return null;
    }
}
export class FactoriaSoloCirculos {
    dameFigura(numero, valor) {
        return new Circulo(valor);
    }
}
export class Figura {
}
export class Cuadrado extends Figura {
    dameSuperficie() {
        return this.lado * this.lado;
    }
    damePerimetro() {
        return this.lado * 4;
    }
    constructor(lado) {
        super();
        this.lado = lado;
    }
}
export class Circulo extends Figura {
    dameSuperficie() {
        return Math.PI * Math.pow(this.radio, 2);
    }
    damePerimetro() {
        return 2 * Math.PI * this.radio;
    }
    constructor(radio) {
        super();
        this.radio = radio;
    }
}
export class TrianguloEquilatero extends Figura {
    dameSuperficie() {
        return this.lado * this.lado / 2;
    }
    damePerimetro() {
        return this.lado * 3;
    }
    constructor(lado) {
        super();
        this.lado = lado;
    }
}
class RomboEquilatero extends Figura {
    dameSuperficie() {
        return this.lado * this.lado / 2;
    }
    damePerimetro() {
        return this.lado * 3;
    }
    constructor(lado) {
        super();
        this.lado = lado;
    }
}
//# sourceMappingURL=Figuras.js.map