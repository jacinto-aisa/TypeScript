"use strict";
class Alumno {
    constructor() {
        this.nombre = "";
        this.edad = 0;
        this.dni = "";
    }
}
class Visionador01 {
    dameDatos(MiAlumno) {
        return MiAlumno.nombre + MiAlumno.edad.toString();
    }
}
class Validador01 {
    isValid(MiAlumno) {
        return (MiAlumno.nombre.length > 5);
    }
}
class Validador02 {
    isValid(MiAlumno) {
        return (MiAlumno.nombre.length > 5 && MiAlumno.edad > 18);
    }
}
class GuardadorEnXML {
    guarda(miAlumno) {
        //lo guarda en disco como XML
        return true;
    }
}
class GuardadorEnJSON {
    guarda(miAlumno) {
        //lo guarda en JSON
        return true;
    }
}
class GuardadorEnBaseDeDatos {
    guarda(miAlumno) {
        //lo guarda en MySQL
        return true;
    }
}
MiAlumno: Alumno;
let miAlumno = new Alumno();
miAlumno.nombre = "jacinto";
miAlumno.edad = 18;
miAlumno.dni = "soiuahsas";
let Validador = new Validador01();
let Visionador = new Visionador01();
let Guardador = new GuardadorEnJSON();
if (Validador.isValid(miAlumno)) {
    Visionador.dameDatos(miAlumno);
    Guardador.guarda(miAlumno);
}
class Coche {
}
class Patata {
}
class Tutor {
}
class Mesa {
}
class MesaCamilla extends Mesa {
}
let MiObjeto1 = new Mesa();
let MiObjeto2 = new MesaCamilla();
let MiObjetoMesa = new Mesa();
let MiObjetoMesa2 = new Tutor();
//# sourceMappingURL=Validadores.js.map