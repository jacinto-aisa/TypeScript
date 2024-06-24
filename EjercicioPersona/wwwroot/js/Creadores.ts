interface IPersonable {
    damePersona(): Persona;
}

class CreadorManualEspañol implements IPersonable {
    damePersona(): Persona {
        let MiPersona = new Persona();
        MiPersona.primerNombre = "Jacinto";
        MiPersona.nombreIntermedio = "";
        MiPersona.apellido1 = "Aisa";
        MiPersona.apellido2 = "Ibañez";
        MiPersona.añoNacimiento = 2000;
        MiPersona.identificador = "2323232";
        MiPersona.activo = true;
        return MiPersona;
    }
}

class CreadorHTML implements IPersonable {
    damePersona(): Persona {
        let MiPersona: Persona = new Persona();
        MiPersona.primerNombre = this.dameValorTexto("nombre1");
        MiPersona.nombreIntermedio = this.dameValorTexto("nombreIntermedio");
        MiPersona.apellido1 = this.dameValorTexto("apellido1");
        MiPersona.apellido2 = this.dameValorTexto("apellido2");
        MiPersona.identificador = this.dameValorTexto("identificativo");
        MiPersona.añoNacimiento = this.dameValorNumero("nac");
        MiPersona.activo = this.dameValorBooleano("activo");
        return MiPersona;
    }

    private dameValorNumero(elementoId: string): number {
        return Number(this.dameValorTexto(elementoId));
    }
    private dameValorBooleano(elementoId: string): boolean {
        return (<HTMLInputElement>document.getElementById(elementoId)).checked;
    }
    private dameValorTexto(elementoId: string) {
        return (<HTMLInputElement>document.getElementById(elementoId)).value;
    }
}
