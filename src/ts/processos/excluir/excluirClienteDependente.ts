import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";

export default class ExcluirClienteDependente extends Processo {    
    processar(): void {
        let armazem = Armazem.InstanciaUnica        
        console.log('Iniciando a exclusão de um cliente...')
        let id = this.entrada.receberNumero('Qual o id do cliente?')
        let cliente = armazem.findById(id)
        if(!cliente) {
            console.log('Cliente não encontrado')
            return
        }

        armazem.excluirClienteDependente(cliente)
        console.log('Cliente excluído')
    }
}