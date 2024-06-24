import {IVisorContexto,VisorContextoMetodo,VisorContextoClase } from "../../js/Librerias/Contexto.js";
//Decoradores de clase.
//es una función que recibe ciertos parámetros especiales.
//Incorporamos la función de exportación del paquete de tipo ECMAScript que es
//además el que usa Angular

//class Person {
//    constructor(readonly name: string) {
//        this.name = name;
//    }
//    epaa() {
//        alert(`Hola mozos, mi nombre es is ${this.name}.`);
//    }
//}
//const p = new Person("Jacintin");
//p.epaa();

//El método epaa, saludo en Aragonés. Es realmente sencillo, pero vamos a imaginar
//que dentro de este método hay un proceso muy largo y que nos gustaría dejar
//una entrada en el log con el fin de poder determinar cuando comienza y cuando termina
//el proceso.

//class Person {
//    constructor(readonly name: string) {
//        this.name = name;
//    }
//    epaa() {
//        console.log("LOG: Estoy entrando en el método");
//        alert(`Hola mozos, mi nombre es is ${this.name}.`);
//        console.log("LOG: Estoy saliendo ");
//    }
//}
//const p = new Person("Jacintin");
//p.epaa();

//Parece ser esto estaría de pistón hacerlo en cada método.
//Al fin y al cabo hacer algo antes o después de un método determinado

//class Person {
//    constructor(readonly name: string) {
//        this.name = name;
//    }
//    epaa() {
//        alert(`Hola mozos, mi nombre es is ${this.name}.`);
//    }
//}
//const p = new Person("Jacintin");
//p.epaa();
//function loggedMethod(originalMethod: any, _context: any) {
//    function replacementMethod(this: any, ...args: any[]) {
//        console.log("LOG: Entering method.")
//        const result = originalMethod.call(this, ...args);
//        console.log("LOG: Exiting method.")
//        return result;
//    }
//    return replacementMethod;
//}
//Vamos a verlo más visualmente
//class Person {
//    constructor(readonly name: string) {
//        this.name = name;
//    }
//    @loggedMethod
//    epaa() {
//        alert(`Hola mozos, mi nombre es is ${this.name}.`);
//    }
//}
//const p = new Person("Jacintin");
//p.epaa();
//function loggedMethod(originalMethod: any, _context: any) {
//    function replacementMethod(this: any, ...args: any[]) {
//        alert("LOG: Entering method.")
//        const result = originalMethod.call(this, ...args);
//        alert("LOG: Exiting method.")
//        return result;
//    }
//    return replacementMethod;
//}
//Esta función realmente reemplaza la función original,
//puede llamar a dicha función mediante originalMethod
//recibe el método original que define como any y también
//un contexto que da información extra, como si es un miembro privado
//o un miembro estático. En la siguiente codificación le pondremos
//una clase que ya está pensando para esto. ClassMethodDecoratorContext

//class Person {
//    constructor(readonly name: string) {
//        this.name = name;
//    }
//    @loggedMethod
//    epaa() {
//        alert(`Hola mozos, mi nombre es is ${this.name}.`);
//    }
//}

//Una explicación de bind, que establece el objeto que representa el this dentro de una función
//class Person {
//    name: string;

//    constructor(name: string) {
//        this.name = name;
//    }

//    epaa() {
//        alert(`Hola mozos, mi nombre es is ${this.name}.`);
//    }
//}

//const person01 = new Person("Jacinto");
//const person02 = new Person("Obdulio");
//const saludaHombre1 = person01.epaa.bind(person01);
//const saludaHombre2 = person01.epaa.bind(person02);
//saludaHombre1(); // Output: Hola mozos, mi nombre es Jacinto (el this es person01)
//saludaHombre2(); // Output: Hola mozos, mi nombres es Odbulio (el this es person02)

///Este patrón que viene a continuación es muy normal en javascript, como es tan erratico, el valor
//de this puede cambiar y es preciso en ocasiones con el fin de tener más garantías, establecer
//un binding para que no puedan cambiar el this de un método. Por ejemplo con un callback o con una
//función independiente.
////https://stackoverflow.com/questions/69420996/is-more-or-less-efficient-to-use-a-stand-alone-function-than-a-callback-in-javas

// Este primer ejemplo debería de petar
//class Person {
//    constructor(readonly name: string) {
//        this.name = name;
//    }

//    epaa() {
//        alert(`Hola mozos, mi nombre es is ${this.name}.`);
//    }
//}
//const greet = new Person("Ray").epaa;
//greet();
//Este ejemplo, no al tener el bind.
//class Person {
//    constructor(readonly name: string) {
//        this.name = name;
//        this.epaa = this.epaa.bind(this);
//    }

//    epaa() {
//        alert(`Hola mozos, mi nombre es is ${this.name} y asi entendéis, para que esto.`);
//    }
//}
//const greet = new Person("Ray").epaa;
//greet();

class Person {
    constructor(readonly name: string) {
        this.name = name;
        this.epaa = this.epaa.bind(this);
    }
    @enlazadorSeguro
    @loggedMethod
    epaa() {
        alert(`Hola mozos, mi nombre es is ${this.name} y asi entendéis, para que esto.`);
    }
}
const greet = new Person("Ray").epaa;
greet();



function loggedMethod(originalMethod: any, _context: ClassMethodDecoratorContext) {
    let visorContexto: IVisorContexto = new VisorContextoMetodo(_context);
    document.body.innerHTML = visorContexto.construyeHTML();
    function replacementMethod(this: any, ...args: any[]) {
        console.log("LOG: Entering method.")
        const result = originalMethod.call(this, ...args);
        visorContexto.rellenaInformacion();
        console.log("LOG: Exiting method.")
        return result;
    }
    return replacementMethod;
}

function enlazadorSeguro(originalMethod: any, context: ClassMethodDecoratorContext) {
    const methodName = context.name;
    if (context.private) {
        throw new Error(`'enlazadorSeguro' no se pueden decorar propiedades privadas como ${methodName as string}.`);
    }
    context.addInitializer(function () {
        this[methodName] = this[methodName].bind(this);
    });
}




