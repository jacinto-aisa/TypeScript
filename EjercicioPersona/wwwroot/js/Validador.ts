interface IValidable {
    isValid(MiPersona: Persona): boolean;
}

class ValidadorEspañol implements IValidable {
    isValid(MiPersona: Persona): boolean {
        return (MiPersona.identificador.length > 0 &&
            MiPersona.apellido1.length > 0 &&
            MiPersona.apellido2.length > 0 &&
            MiPersona.primerNombre.length > 0);
    }
}

class ValidadorIngles implements IValidable {
    isValid(MiPersona: Persona): boolean {
        return (MiPersona.identificador.length > 0 &&
            MiPersona.apellido1.length > 0 &&
            MiPersona.nombreIntermedio.length > 0 &&
            MiPersona.primerNombre.length > 0);
    }
}