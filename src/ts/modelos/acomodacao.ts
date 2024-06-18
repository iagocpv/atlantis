import GeradorId from "../dominio/geradorId";
import { NomeAcomodacao } from "../enumeracoes/nomeAcomodacao"
import Cliente from "./cliente";

export default class Acomodacao {
    private id: number;
    private nomeAcomadacao: NomeAcomodacao
    private camaSolteiro: Number
    private camaCasal: Number
    private suite: Number
    private climatizacao: Boolean
    private garagem: Number
    private cliente?: Cliente

    constructor(nomeAcomadacao: NomeAcomodacao, camaSolteiro: Number, camaCasal: Number,
        suite: Number, climatizacao: Boolean, garagem: Number) {
        this.id = GeradorId.gerarIdAcomodacao()
        this.nomeAcomadacao = nomeAcomadacao
        this.camaSolteiro = camaSolteiro
        this.camaCasal = camaCasal
        this.suite = suite
        this.climatizacao = climatizacao
        this.garagem = garagem
    }

    public get Id() { return this.id }
    public get NomeAcomadacao() { return this.nomeAcomadacao }
    public get CamaSolteiro() { return this.camaSolteiro }
    public get CamaCasal() { return this.camaCasal }
    public get Suite() { return this.suite }
    public get Climatizacao() { return this.climatizacao }
    public get Garagem() { return this.garagem }

    public set Cliente(cliente: Cliente) { this.cliente = cliente }
    public removerCliente() {
        this.cliente = undefined
    }
}