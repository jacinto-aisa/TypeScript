

interface IFechaSpecification {
    isValid(fecha: Fecha): boolean;
}

class FechaEspecificationJacinto implements IFechaSpecification {
    isValid(fecha: Fecha): boolean {
        return (fecha.ano > 1999 && fecha.ano < 2025 && fecha.mes > 0 && fecha.mes < 13 && fecha.dia > 0 && fecha.dia < 32);
    }
}
class FechaEspecificationFrancisco implements IFechaSpecification {
    isValid(fecha: Fecha): boolean {
        return (fecha.ano > 1980 && fecha.ano < 2010 && fecha.mes > 0 && fecha.mes < 13 && fecha.dia > 0 && fecha.dia < 32);
    }
}
class FechaEspecificacionEva implements IFechaSpecification {
    isValid(fecha: Fecha): boolean {
        return (fecha.ano > 2000);
    }
}

interface IValidadorAnimal {
    isValid(MiAnimal: Animal): boolean;
}

class ValidadorAnimal implements IValidadorAnimal {
    isValid(MiAnimal: Animal): boolean {
        return new FechaEspecificacionEva().isValid(MiAnimal.fecha) && MiAnimal.nombre.length >= 2;
    }
}

interface IValidadorMamifero {
    isValid(Mamif: Mamifero): boolean;
}

class ValidadorMamifero implements IValidadorMamifero {
    isValid(Mamif: Mamifero): boolean {
        return (Mamif.mesesGes > 0 && Mamif.mesesGes < 19);
    }
}

class ValidadorMamiferoFrancisco implements IValidadorMamifero {
    isValid(Mamif: Mamifero): boolean {
        return (Mamif.mesesGes > 0 && Mamif.mesesGes < 29);
    }
}

interface IValidadorPrimate {
    isValid(Prim: Primate): boolean;
}

class ValidadorPrimate implements IValidadorPrimate {
    isValid(Prim: Primate): boolean {
        return new FechaEspecificacionEva().isValid(Prim.fecha) && Prim.nombre.length >= 2 && Prim.mesesGes > 2 && Prim.mesesGes < 12;
    }
}

interface IValidadorHumano {
    isValid(Hum: Humano): boolean;
}

class ValidadorHumano implements IValidadorHumano {
    isValid(Hum: Humano): boolean {
        return new FechaEspecificacionEva().isValid(Hum.fecha) && Hum.nombre.length >= 2 && Hum.mesesGes > 2 && Hum.mesesGes < 12;

    }
}


class Fecha {
    mes: number;
    dia: number;
    ano: number;

    constructor(ano: number, mes: number, dia: number) {
        this.ano = ano;
        this.mes = mes;
        this.dia = dia;
    }
    dameEdad(): number {
        let fechaActual = new Date();
        let fechaMia = new Date(this.ano, this.mes, this.dia);
        let diff = Math.abs(fechaActual.getTime() - fechaMia.getTime());
        return Math.ceil(diff / (1000 * 3600 * 24)) / 365;
    }
    dameFecha(): string {
        return `Fecha: ${this.ano.toString()}/${this.mes.toString()}/${this.dia}`;
    }
}

class Animal {
    fecha: Fecha;
    nombre: String;
    constructor(Ano: number, Dia: number, Mes: number, nombre: string) {
        this.fecha = new Fecha(Ano, Mes, Dia);
        this.nombre = nombre;
    }
    dameDatos(): string {
        return `"nombre: ${this.nombre} y fechaNac: ${this.fecha.dameFecha()}`;
    }
}
class Mamifero extends Animal {
    mesesGes: number = 0;
    constructor(Ano: number, Dia: number, Mes: number, nombre: string, meses: number) {
        super(Ano, Dia, Mes, nombre);
        this.mesesGes = meses;
    }
    dameDatos(): string {
        return super.dameDatos() + " meses gestación: " + this.mesesGes.toString();
    }
}
class Primate extends Mamifero {
    masacel: number = 0;
    constructor(Ano: number, Dia: number, Mes: number, nombre: string, meses: number, masaCel: number) {
        super(Ano, Dia, Mes, nombre, meses);
        this.masacel = masaCel;
    }
    propMasCel(): number {
        return this.masacel / this.mesesGes;
    }
    dameDatos(): string {
        return super.dameDatos() + " proporcion masa cel: " + this.propMasCel().toString();
    }
}
class Humano extends Primate {
    apellidos: string = "";
    constructor(Ano: number, Dia: number, Mes: number, nombre: string, meses: number, masaCel: number, apellidos: string) {
        super(Ano, Dia, Mes, nombre, meses, masaCel);
        this.apellidos = apellidos;
    }
}



let _ValidadorAnimal: IValidadorAnimal = new ValidadorAnimal();
let _ValidadorMamifero: IValidadorMamifero = new ValidadorMamiferoFrancisco();
let _ValidadorPrimate: IValidadorPrimate = new ValidadorPrimate();
let _ValidadorHumano: IValidadorHumano = new ValidadorHumano();

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