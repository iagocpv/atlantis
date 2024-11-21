import { ClienteType } from "./clienteType";

export type AcomodacaoType = {
    id: number;
    numero?: number
    nome: string
    camaSolteiro?: number
    camaCasal?: number
    suite?: number
    climatizacao?: boolean
    garagem?: number
    cliente?: ClienteType
}