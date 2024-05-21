import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemTitularPorDependente extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem dos clientes dependentes...')
        let cpf = this.entrada.receberTexto('Qual o CPF do cliente dependente?')
        let cliente = this.clientes.find(c => c.Cpf === cpf)
        if(!cliente) {
            console.log('Cliente não encontrado')
            return
        }
        this.impressor = new ImpressaorCliente(cliente.Titular)
        console.log(this.impressor.imprimir())       
    }
}