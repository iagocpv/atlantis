import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import Impressor from "../../interfaces/impressor";
import Cliente from "../../modelos/cliente";

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
        let id = this.entrada.receberNumero('Qual o id do cliente dependente?')
        let cliente = this.clientes.find(c => c.Id === id)
        if(!cliente) {
            console.log('Cliente não encontrado')
            return
        }
        this.impressor = new ImpressaorCliente(cliente.Titular)
        console.log(this.impressor.imprimir())       
    }
}