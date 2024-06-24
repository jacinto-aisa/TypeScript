"use strict";
class ConfiguradorEspañolBasico {
    dameGenerador() {
        return new MiPrimerHTML(new HTMLBootStrap());
    }
    dameCreador() {
        return new CreadorHTML();
    }
    dameValidador() {
        return new ValidadorIngles();
    }
    dameMostrador() {
        return new MuestraHTML();
    }
}
