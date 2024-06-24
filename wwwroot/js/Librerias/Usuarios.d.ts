declare enum Estados {
    Delgado = 0,
    Normal = 1,
    Gordo = 2,
    Obeso = 3,
    Error = 4
}
export declare class Usuario {
    private _NombreCompleto;
    get NombreCompleto(): string;
    set NombreCompleto(value: string);
    private _NombreUsuario;
    get NombreUsuario(): string;
    set NombreUsuario(value: string);
    private _Peso;
    get Peso(): number;
    set Peso(value: number);
    private _Altura;
    get Altura(): number;
    set Altura(value: number);
    constructor(NombreCompleto: string, NombreUsuario: string, Peso: number, Altura: number);
    dameIMC(): number;
    dameTratamiento(): Estados;
    dameImagen(): string;
}
export {};
