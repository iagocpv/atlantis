import GeradorId from "../dominio/geradorId"
import { TipoDocumento } from "../enumeracoes/TipoDocumento"
import Prototipo from "../interfaces/prototipo"
import Documento from "./documento"
import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente {
    private id: number
    private nome: string
    private nomeSocial: string
    private dataNascimento: Date
    private dataCadastro: Date
    private telefones: Telefone[] = []
    private endereco!: Endereco
    private documentos: Documento[] = []
    private dependentes: Cliente[] = []
    private titular!: Cliente

    constructor(nome: string, nomeSocial: string, dataNascimento: Date) {
        this.id = GeradorId.gerarIdCliente()
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.dataNascimento = dataNascimento
        this.dataCadastro = new Date()
    }

    public get Id() { return this.id}
    public get Nome() { return this.nome }
    public get NomeSocial() { return this.nomeSocial }
    public get DataNascimento() { return this.dataNascimento }
    public get DataCadastro() { return this.dataCadastro }
    public get Telefones() { return this.telefones }
    public get Endereco() { return this.endereco }
    public get Documentos() { return this.documentos }
    public get Dependentes() { return this.dependentes }
    public get Titular() { return this.titular }
    public get Cpf() { return this.documentos.find(doc => doc.Tipo === TipoDocumento.CPF)?.Numero}

    public set Endereco(endereco: Endereco) { this.endereco = endereco }
    public set Titular(cliente: Cliente) { this.titular = cliente}
    public set Dependentes(dependentes: Cliente[]) { this.dependentes = dependentes}

    public atualizarDadosBasicos(nome?: string, nomeSocial?: string, dataNascimento?: Date) {
        if(nome) this.nome = nome
        if(nomeSocial) this.nomeSocial = nomeSocial
        if(dataNascimento) this.dataNascimento = dataNascimento
    }
    public atualizarEnderecoDependentes() {
        this.dependentes.forEach(d => {
            d.Endereco = this.endereco.clonar()
        })
    }
}