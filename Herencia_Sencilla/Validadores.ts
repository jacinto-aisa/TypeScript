class Alumno {
    nombre: string="";
    edad: number = 0;
    dni: string = "";
}
interface IMostradorDeAlumnos {
    dameDatos(MiAlumno :Alumno): string;
}



class Visionador01 implements IMostradorDeAlumnos {

    dameDatos(MiAlumno: Alumno): string {
        return MiAlumno.nombre + MiAlumno.edad.toString();
    }
}

interface IValidadorDeAlumno {
    isValid(MiAlumno: Alumno): boolean;
}

class Validador01 implements IValidadorDeAlumno {
    isValid(MiAlumno: Alumno): boolean {
        return (MiAlumno.nombre.length > 5);
    }
}

class Validador02 implements IValidadorDeAlumno {
    isValid(MiAlumno: Alumno): boolean {
        return (MiAlumno.nombre.length > 5 && MiAlumno.edad > 18);
    }

}
interface IGuardadorDeAlumno {
    guarda(miAlumno: Alumno): boolean;
}

class GuardadorEnXML implements IGuardadorDeAlumno {
    guarda(miAlumno: Alumno): boolean {
        //lo guarda en disco como XML
        return true;
    }
}

class GuardadorEnJSON implements IGuardadorDeAlumno {
    guarda(miAlumno: Alumno): boolean {
        //lo guarda en JSON
        return true;
    }
}


class GuardadorEnBaseDeDatos implements IGuardadorDeAlumno {
    guarda(miAlumno: Alumno): boolean {
        //lo guarda en MySQL
        return true;
    }
}


MiAlumno: Alumno;
let miAlumno = new Alumno();
miAlumno.nombre = "jacinto";
miAlumno.edad = 18;
miAlumno.dni = "soiuahsas";

let Validador: IValidadorDeAlumno = new Validador01();
let Visionador: IMostradorDeAlumnos = new Visionador01();
let Guardador: IGuardadorDeAlumno = new GuardadorEnJSON();
    
if (Validador.isValid(miAlumno)) {
    Visionador.dameDatos(miAlumno);
    Guardador.guarda(miAlumno);
}



class Coche {

}
class Patata {

}
class Tutor { }
class Mesa { }

class MesaCamilla extends Mesa { }


let MiObjeto1: Object = new Mesa();
let MiObjeto2: Object = new MesaCamilla();
let MiObjetoMesa: Mesa = new Mesa();
let MiObjetoMesa2: Mesa = new Tutor();








