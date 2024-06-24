//Class Decorators
//Un decorador de clase se declara justo antes de una declaración de clase.El decorador de clases se aplica al constructor de la clase y puede usarse para observar, modificar o reemplazar una definición de clase.
//Un decorador de clase no se puede utilizar en un archivo de declaración ni en ningún otro contexto ambiental(como en una clase declare).
//La expresión para el decorador de clases se llamará como una función en tiempo de ejecución, con el constructor de la clase decorada como único argumento.
//Si el decorador de clase devuelve un valor, reemplazará la declaración de clase con la función constructora proporcionada.
//NOTA Si decide devolver una nueva función constructora, debe tener cuidado de mantener el prototipo original.La lógica que aplica los decoradores en tiempo de ejecución no hará esto por usted.
//El siguiente es un ejemplo de un decorador de clase(@sealed) aplicado a una clase BugReport:

import { IVisorContexto, VisorContextoClase } from "../Librerias/Contexto";

@sealed
class BugReport {
    type = "report";
    title: string;

    constructor(t: string) {
        this.title = t;
    }
}
//Podemos definir el decorador @sealed usando la siguiente declaración de función:
function sealed(target: any, context: ClassDecoratorContext) {
/*    let miVisor: IVisorContexto = new VisorContextoClase(context);*/
/*    miVisor.construyeHTML();*/
    function sealed(constructor: Function) {
        Object.seal(constructor);
        Object.seal(constructor.prototype);
/*        miVisor.rellenaInformacion();*/
    }
}
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