"use strict";
class FechaEspecificationJacinto {
    isValid(fecha) {
        return (fecha.ano > 1999 && fecha.ano < 2025 && fecha.mes > 0 && fecha.mes < 13 && fecha.dia > 0 && fecha.dia < 32);
    }
}
class FechaEspecificationFrancisco {
    isValid(fecha) {
        return (fecha.ano > 1980 && fecha.ano < 2010 && fecha.mes > 0 && fecha.mes < 13 && fecha.dia > 0 && fecha.dia < 32);
    }
}
class FechaEspecificacionEva {
    isValid(fecha) {
        return (fecha.ano > 2000);
    }
}
class ValidadorAnimal {
    isValid(MiAnimal) {
        return new FechaEspecificacionEva().isValid(MiAnimal.fecha) && MiAnimal.nombre.length >= 2;
    }
}
class ValidadorMamifero {
    isValid(Mamif) {
        return (Mamif.mesesGes > 0 && Mamif.mesesGes < 19);
    }
}
class ValidadorMamiferoFrancisco {
    isValid(Mamif) {
        return (Mamif.mesesGes > 0 && Mamif.mesesGes < 29);
    }
}
class ValidadorPrimate {
    isValid(Prim) {
        return new FechaEspecificacionEva().isValid(Prim.fecha) && Prim.nombre.length >= 2 && Prim.mesesGes > 2 && Prim.mesesGes < 12;
    }
}
class ValidadorHumano {
    isValid(Hum) {
        return new FechaEspecificacionEva().isValid(Hum.fecha) && Hum.nombre.length >= 2 && Hum.mesesGes > 2 && Hum.mesesGes < 12;
    }
}
class Fecha {
    constructor(ano, mes, dia) {
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
    }
    dameEdad() {
        let fechaActual = new Date();
        let fechaMia = new Date(this.ano, this.mes, this.dia);
        let diff = Math.abs(fechaActual.getTime() - fechaMia.getTime());
        return Math.ceil(diff / (1000 * 3600 * 24)) / 365;
    }
    dameFecha() {
        return `Fecha: ${this.ano.toString()}/${this.mes.toString()}/${this.dia}`;
    }
}
class Animal {
    constructor(Ano, Dia, Mes, nombre) {
        this.fecha = new Fecha(Ano, Mes, Dia);
        this.nombre = nombre;
    }
    dameDatos() {
        return `"nombre: ${this.nombre} y fechaNac: ${this.fecha.dameFecha()}`;
    }
}
class Mamifero extends Animal {
    constructor(Ano, Dia, Mes, nombre, meses) {
        super(Ano, Dia, Mes, nombre);
        this.mesesGes = 0;
        this.mesesGes = meses;
    }
    dameDatos() {
        return super.dameDatos() + " meses gestaci�n: " + this.mesesGes.toString();
    }
}
class Primate extends Mamifero {
    constructor(Ano, Dia, Mes, nombre, meses, masaCel) {
        super(Ano, Dia, Mes, nombre, meses);
        this.masacel = 0;
        this.masacel = masaCel;
    }
    propMasCel() {
        return this.masacel / this.mesesGes;
    }
    dameDatos() {
        return super.dameDatos() + " proporcion masa cel: " + this.propMasCel().toString();
    }
}
class Humano extends Primate {
    constructor(Ano, Dia, Mes, nombre, meses, masaCel, apellidos) {
        super(Ano, Dia, Mes, nombre, meses, masaCel);
        this.apellidos = "";
        this.apellidos = apellidos;
    }
}
let _ValidadorAnimal = new ValidadorAnimal();
let _ValidadorMamifero = new ValidadorMamiferoFrancisco();
let _ValidadorPrimate = new ValidadorPrimate();
let _ValidadorHumano = new ValidadorHumano();
let miAnimal = new Animal(2010, 10, 10, "paquito");
if (_ValidadorAnimal.isValid(miAnimal)) {
    console.log(miAnimal.dameDatos());
}
let miElefante = new Mamifero(1990, 11, 10, "dumbo", 9);
if (_ValidadorMamifero.isValid(miElefante)) {
    console.log(miElefante.dameDatos());
}
let miMono = new Primate(2010, 10, 10, "paquito", 9, 10);
if (_ValidadorPrimate.isValid(miMono)) {
    console.log(miMono.dameDatos());
}
let federico = new Humano(2010, 10, 10, "luis", 9, 10, "garcia");
if (_ValidadorHumano.isValid(federico)) {
    console.log(federico.dameDatos());
}
//# sourceMappingURL=JerarquiaAnimales.js.map