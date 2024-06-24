let miConjunto = new Set<string>();
miConjunto.add("pepe");
miConjunto.add("juan");

window.alert("hola");
miConjunto.add("pepe");
miConjunto.add("juan");
miConjunto.forEach(imprime);
let valorNuevo: string = "ana";
if (miConjunto.has(valorNuevo)) {
    console.log("elemento Repetido");
}
else {
    miConjunto.add(valorNuevo);
}



for (let valor of miConjunto) {
    document.write(valor);
}
miConjunto.delete("pepe");
miConjunto.add("pepe");
console.log("Tamaño " + miConjunto.size);

miConjunto.clear();




function imprime(element: any) {
    console.log(element.toString());
}
