import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependentesPorTitular extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        console.log('Iniciando a listagem dos clientes dependentes...')
        let cpf = this.entrada.receberTexto('Qual o CPF do cliente titular?')
        let cliente = this.clientes.find(c => c.Cpf === cpf)
        if(!cliente) {
            console.log('Cliente não encontrado')
            return
        }
        if(!cliente.Dependentes) {
            console.log('Este cliente não possui dependentes')
            return
        }
        cliente.Dependentes.forEach(d => {
            this.impressor = new ImpressaorCliente(d)
            console.log(this.impressor.imprimir())
        })        
    }
}