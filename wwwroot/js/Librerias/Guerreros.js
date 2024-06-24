export class MX7899 {
    constructor() {
        this.blindaje = 1.4;
        this.potencia = 0;
    }
}
export class VB98 {
    constructor() {
        this.blindaje = 4.8;
        this.potencia = 9.8;
    }
}
export class TAXIN66 {
    constructor() {
        this.blindaje = 0;
        this.potencia = 0;
    }
}
export class FactoriaDeCombateBasica {
    dameElementoDeCombate(numero) {
        switch (numero) {
            case 1: return new MX7899();
            case 2: return new VB98();
            case 3: return new TAXIN66();
            default: return null;
        }
    }
}
//# sourceMappingURL=Guerreros.js.map