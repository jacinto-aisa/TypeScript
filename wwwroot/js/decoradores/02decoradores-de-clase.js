//Class Decorators
//Un decorador de clase se declara justo antes de una declaración de clase.El decorador de clases se aplica al constructor de la clase y puede usarse para observar, modificar o reemplazar una definición de clase.
//Un decorador de clase no se puede utilizar en un archivo de declaración ni en ningún otro contexto ambiental(como en una clase declare).
//La expresión para el decorador de clases se llamará como una función en tiempo de ejecución, con el constructor de la clase decorada como único argumento.
//Si el decorador de clase devuelve un valor, reemplazará la declaración de clase con la función constructora proporcionada.
//NOTA Si decide devolver una nueva función constructora, debe tener cuidado de mantener el prototipo original.La lógica que aplica los decoradores en tiempo de ejecución no hará esto por usted.
//El siguiente es un ejemplo de un decorador de clase(@sealed) aplicado a una clase BugReport:
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
let BugReport = (() => {
    let _classDecorators = [sealed];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var BugReport = _classThis = class {
        constructor(t) {
            this.type = "report";
            this.title = t;
        }
    };
    __setFunctionName(_classThis, "BugReport");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        BugReport = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return BugReport = _classThis;
})();
//Podemos definir el decorador @sealed usando la siguiente declaración de función:
function sealed(target, context) {
    /*    let miVisor: IVisorContexto = new VisorContextoClase(context);*/
    /*    miVisor.construyeHTML();*/
    function sealed(constructor) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
        /*        miVisor.rellenaInformacion();*/
    }
}
export {};
////Cuando se ejecuta @sealed , sellará tanto el constructor como su prototipo y, por lo tanto, evitará que se agregue o elimine cualquier funcionalidad adicional de esta clase durante el tiempo de ejecución accediendo a BugReport.prototype o definiendo propiedades en el propio BugReport(tenga en cuenta que las clases ES2015 son realmente solo azúcar sintáctico para funciones constructoras basadas en prototipos).Este decorador no impide que las clases subclasifiquen BugReport.
////A continuación tenemos un ejemplo de cómo anular el constructor para establecer nuevos valores predeterminados.
//function reportableClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
//    return class extends constructor {
//        reportingURL = "http://www...";
//    };
//}
//@reportableClassDecorator
//class BugReport {
//    type = "report";
//    title: string;
//    constructor(t: string) {
//        this.title = t;
//    }
//}
//const bug = new BugReport("Needs dark mode");
//console.log(bug.title); // Imprime  "Needs dark mode"
//console.log(bug.type); // Imprime  "report"
//// Tenga en cuenta que el decorador _no_ cambia el tipo  TypeScript
//// y por eso no se conoce la nueva propiedad `reportingURL`
//// al sistema de tipos:
//bug.reportingURL;
//# sourceMappingURL=02decoradores-de-clase.js.map