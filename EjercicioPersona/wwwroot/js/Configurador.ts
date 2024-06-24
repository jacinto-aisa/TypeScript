interface IConfigurable {
    dameGenerador(): IGeneraHTML;
    dameCreador(): IPersonable;
    dameValidador(): IValidable;
    dameMostrador(): IMuestra;
}

class ConfiguradorEspañolBasico implements IConfigurable {
    dameGenerador(): IGeneraHTML {
        return new MiPrimerHTML(new HTMLBootStrap());
    }
    dameCreador(): IPersonable {
        return new CreadorHTML();
    }
    dameValidador(): IValidable {
        return new ValidadorIngles();
    }
    dameMostrador(): IMuestra {
        return new MuestraHTML();
    }
}