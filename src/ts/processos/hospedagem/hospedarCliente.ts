import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import { NomeAcomodacao } from "../../enumeracoes/nomeAcomodacao";
import MenuOpcoesAcomodacao from "../../menus/menuOpcoesAcomodacao";

export default class HospedarCliente extends Processo{
    private armazem: Armazem    
    constructor() {
        super()
        this.armazem = Armazem.InstanciaUnica
        this.menu = new MenuOpcoesAcomodacao()
    }
    processar(): void {
        let idCliente = this.entrada.receberNumero("Qual o id do cliente?")
        let cliente = this.armazem.findById(idCliente)
        if(!cliente) {
            console.log('Cliente não encontrado')
            return
        }
        if(this.armazem.Acomodacoes.find(a => a.Cliente == cliente)) {
            console.log('Cliente já está hospedado')
            return
        }
        this.menu.mostrar()
        let opcao = this.entrada.receberNumero("Qual o número do tipo de acomodação?")
        let opcoes = Object.values(NomeAcomodacao)
        let tipoAcomodacao = opcoes[opcao-1]
        console.log(tipoAcomodacao)
        let acomodacao = this.armazem.Acomodacoes.map(a => {
                console.log(a.NomeAcomadacao)
                return a
            }).find(a => (a.NomeAcomadacao === tipoAcomodacao && !a.Cliente))
        if(!acomodacao) {
            console.log("Nenhuma acomodação deste tipo disponível")
            return
        }
        acomodacao.Cliente = cliente
        console.log("Cliente hospedado")
    }
}