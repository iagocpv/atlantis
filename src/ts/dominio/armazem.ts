import Cliente from "../modelos/cliente";

export default class Armazem {
    private static instanciaUnica: Armazem = new Armazem()
    private clientes: Cliente[] = []
    private constructor() { }
    public static get InstanciaUnica() {
        return this.instanciaUnica
    }
    public get Clientes() {
        return this.clientes
    }
    public findByCpf(cpf: string) {
        return this.clientes.find(cliente => cliente.Cpf === cpf)
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

}