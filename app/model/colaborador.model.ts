export enum Permissao{
    ADMIN = "Admnistrador",
    USER = "Usuario"
}

export enum Funcao {
    GERENTE = "Gerente",
    OPERADOR = "Operador"
}

export interface colaboradorModel{
    idColaborador? : number;
    nome? : string;
    cpf? : string;
    permissao? : Permissao;
    funcao? : Funcao;
}