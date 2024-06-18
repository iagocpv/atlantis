import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import ImpressaorCliente from "../../impressores/impressorCliente";
import AtualizarDocumentosCliente from "./atualizarDocumentosCliente";

export default class AtualizarClienteDependente extends Processo {
    processar(): void {
        let armazem = Armazem.InstanciaUnica
        console.log('Iniciando a atualização de um cliente...')
        let id = this.entrada.receberNumero('Qual o id do cliente?')
        let cliente = armazem.findById(id)
        if(!cliente) {
            console.log('Cliente não encontrado')
            return
        }
        let nome = this.entrada.receberTexto('Qual o novo nome do cliente?')
        let nomeSocial = this.entrada.receberTexto('Qual o novo nome social do cliente?')
        let dataNascimento = this.entrada.receberData('Qual a nova data de nascimento do cliente?')
        cliente.atualizarDadosBasicos(nome, nomeSocial, dataNascimento)
        
        if(cliente.Documentos) {
            let opcao = this.entrada.receberTexto("Deseja atualizar os documentos? (s/n)")
            if(opcao === 's') {
                new AtualizarDocumentosCliente(cliente.Documentos).processar()
            }
        }

        console.log("Cliente atualizado:")
        let impressor = new ImpressaorCliente(cliente)
        console.log(impressor.imprimir())

        armazem.Clientes.push(cliente)


        console.log('Finalizando a atualização do cliente...')
    }
}