"use strict";
let nombreAlumnos = [];
nombreAlumnos.push("Jacinto");
nombreAlumnos.push("Ambrosio");
nombreAlumnos.push("Ana");
nombreAlumnos.push("Lucas");
nombreAlumnos.push("Leira");
nombreAlumnos.push("Josh");
nombreAlumnos.push("Pedro");
nombreAlumnos.push("Luis");
for (let entry of nombreAlumnos) {
    console.log(entry);
}
console.log(nombreAlumnos.length.toString());
nombreAlumnos.sort();
for (let entry in nombreAlumnos) {
    console.log(entry);
}
let notasAlumnos = [];
notasAlumnos.push(9);
notasAlumnos.push(8);
notasAlumnos.push(6);
notasAlumnos.push(5);
notasAlumnos.sort();
//# sourceMappingURL=Colecciones.js.map