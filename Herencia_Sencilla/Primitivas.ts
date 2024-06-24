class Item {
    numeroDePatas: number = 0;
    numeroDePies: number = 0;
    constructor(numPatas: number, numPies: number) {
        this.numeroDePatas = numPatas;
        this.numeroDePies = numPies;
    }
}
interface IOrdenable {
    ordenar(elementoA :any, elementoB: any): number;
}

class Ordenador implements IOrdenable {
    ordenar(elementoA: any, elementoB: any): number {
        let primerItem = elementoA as Item;
        let segundoItem = elementoB as Item;
        if (primerItem.numeroDePatas != segundoItem.numeroDePatas) {
            return primerItem.numeroDePatas - segundoItem.numeroDePatas;
        }
        else {
            return primerItem.numeroDePies - segundoItem.numeroDePies;
        }
    }
}

class OrdenarAlReves implements IOrdenable { 
    ordenar(elementoA: any, elementoB: any): number {
        return elementoB - elementoA;
    }
}
class Almacen {
    Ordenacion: IOrdenable;
    Filtrado: IFiltrable;
    lista: Item[] = [];
    constructor(Ordenacion : IOrdenable,Filtrado: IFiltrable)
    {
        this.Ordenacion = Ordenacion;
        this.Filtrado = Filtrado;
    }
    ordena() {
        this.lista.sort(this.Ordenacion.ordenar);
    }
    filtra() {
        this.lista.filter(this.Filtrado.filtradillo);
    }
}
interface IFiltrable {
    filtradillo(elemento: any): boolean;
}

class FiltroPorPatas implements IFiltrable {
    filtradillo(elemento: any): boolean {
        return (elemento as Item).numeroDePatas > 6;
    }

}

let MiAlmacen: Almacen = new Almacen(new OrdenarAlReves(),new FiltroPorPatas());
MiAlmacen.ordena();
MiAlmacen.filtra();



let listaDeItems: Item[] = [new Item(89), new Item(90)];
listaDeItems.sort(function (a, b) { return a.numeroDePatas - b.numeroDePatas; });
listaDeItems.sort((a, b) => a.numeroDePatas - b.numeroDePatas);


let listaNombres: string[] = ["juan", "pepe", "luisito", "Carmencita"];
let cadena = listaNombres.join("\n");
console.log(cadena);

let cadenica02: string = "pluto,minie,miky,winny";
let listaNombres02 = cadenica02.split(",");


let listaDeNumeros: number[] = [7,8,0,10];
listaDeNumeros.push(89);
listaDeNumeros.push(100);
for (let var01 in listaDeNumeros) {
    console.log(var01.toString());
}
listaDeNumeros.sort(function (a, b) { return a - b; });



function esPositivo(element: any, index: any, array: any): boolean{
    return element >= 0;
}
if (listaDeNumeros.every(esPositivo)) {
    console.log("todos son positivos");
}
listaDeNumeros.every(function (iterador) { return iterador >= 0; })

function esPar(element: any, index: any, array: any): boolean {
    return element % 2 == 0;
}
let listaFiltrada = listaDeNumeros.filter(esPar);
let listaFiltrada2 = listaDeNumeros.filter(function (value) {
    return (value % 2 == 0);
})

function imprime(element: any, index: any, array: any): string {
    return element.toString();
}


listaDeNumeros.forEach(function (value) {
    console.log(value);
}); 

listaDeNumeros.forEach(imprime);
