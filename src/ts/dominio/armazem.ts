import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";

export default class Armazem {
    private static instanciaUnica: Armazem = new Armazem()
    private clientes: Cliente[] = []
    private acomodacoes: Acomodacao[] = []
    private constructor() { }
    public static get InstanciaUnica() {
        return this.instanciaUnica
    }
    public get Clientes() {
        return this.clientes
    }
    public get Acomodacoes(){
        return this.acomodacoes
    }
    public findById(id: number) {
        return this.clientes.find(cliente => cliente.Id === id)
    }
    public findAcomodacaoPorId(id: number) {
        return this.acomodacoes.find(a => a.Id === id)
    }
    public excluirClienteTitular(cliente: Cliente) {
        this.clientes = this.clientes.filter(c => c !== cliente)
    }
    public excluirClienteDependente(cliente: Cliente) {
        let titular = this.clientes.find(c => cliente.Titular.Cpf === c.Cpf)
        if(titular) {
            titular.Dependentes = titular.Dependentes.filter(d => d != cliente)
        }
        this.clientes = this.clientes.filter(c => c !== cliente)
    }
    public excluirAcomodacao(id: number) {
        this.acomodacoes = this.acomodacoes.filter(a => a.Id !== id)
    }

}