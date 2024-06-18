import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";

export default class ExcluirClienteTitular extends Processo {    
    processar(): void {
        let armazem = Armazem.InstanciaUnica        
        console.log('Iniciando a exclusão de um cliente...')
        let id = this.entrada.receberNumero('Qual o id do cliente?')
        let cliente = armazem.findById(id)
        if(!cliente) {
            console.log('Cliente não encontrado')
            return
        }
        if(cliente.Dependentes.length > 0) {
            console.log('Cliente não pode ser excluído pq possui dependentes')
            return
        }
        armazem.excluirClienteTitular(cliente)
        console.log('Cliente excluído')
    }
}