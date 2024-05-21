import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";

export default class CadastroClienteDependente extends Processo {
    processar(): void {
        let armazem = Armazem.InstanciaUnica

        console.log('Iniciando o cadastro de um novo cliente...')

        let cpfTitular = this.entrada.receberTexto('Qual o CPF do cliente titular?')
        let clienteTitular = armazem.findByCpf(cpfTitular)
        if(!clienteTitular) {
            console.log('Cliente titular não encontrado')
            return
        }
        let nome = this.entrada.receberTexto('Qual o nome do novo cliente?')
        let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente?')
        let dataNascimento = this.entrada.receberData('Qual a data de nascimento?')
        let cliente = new Cliente(nome, nomeSocial, dataNascimento)
        cliente.Titular = clienteTitular
        cliente.Endereco = clienteTitular.Endereco.clonar()
        
        this.processo = new CadastrarDocumentosCliente(cliente)
        this.processo.processar()
        
        armazem.Clientes.push(cliente)
        clienteTitular.Dependentes.push(cliente)

        console.log('Finalizando o cadastro do cliente...')
    }
}