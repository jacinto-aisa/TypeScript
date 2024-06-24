var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
import { VisorContextoMetodo } from "../../js/Librerias/Contexto.js";
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
let Person = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _epaa_decorators;
    return _a = class Person {
            constructor(name) {
                this.name = (__runInitializers(this, _instanceExtraInitializers), name);
                this.name = name;
                this.epaa = this.epaa.bind(this);
            }
            epaa() {
                alert(`Hola mozos, mi nombre es is ${this.name} y asi entendéis, para que esto.`);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _epaa_decorators = [enlazadorSeguro, loggedMethod];
            __esDecorate(_a, null, _epaa_decorators, { kind: "method", name: "epaa", static: false, private: false, access: { has: obj => "epaa" in obj, get: obj => obj.epaa }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
const greet = new Person("Ray").epaa;
greet();
function loggedMethod(originalMethod, _context) {
    let visorContexto = new VisorContextoMetodo(_context);
    document.body.innerHTML = visorContexto.construyeHTML();
    function replacementMethod(...args) {
        console.log("LOG: Entering method.");
        const result = originalMethod.call(this, ...args);
        visorContexto.rellenaInformacion();
        console.log("LOG: Exiting method.");
        return result;
    }
    return replacementMethod;
}
function enlazadorSeguro(originalMethod, context) {
    const methodName = context.name;
    if (context.private) {
        throw new Error(`'enlazadorSeguro' no se pueden decorar propiedades privadas como ${methodName}.`);
    }
    context.addInitializer(function () {
        this[methodName] = this[methodName].bind(this);
    });
}
//# sourceMappingURL=01decoradores-Introduccion.js.map