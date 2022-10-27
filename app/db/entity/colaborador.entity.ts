import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum Permissao{
    ADMIN = "Admnistrador",
    USER = "Usuario"
}

export enum Funcao {
    GERENTE = "Gerente",
    OPERADOR = "Operador"
}

@Entity()
export class Colaborador{
    @PrimaryGeneratedColumn()
    idColaborador: number

    @Column({
        nullable: true
    })
    nome: string

    @Column()
    cpf: string

    @Column({
        type: "enum",
        enum: Permissao
    })
    permissao: Permissao

    @Column({
        type: "enum",
        enum: Funcao
    })
    funcao: Funcao
}