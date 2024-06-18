import Processo from "../../abstracoes/processo";
import Armazem from "../../dominio/armazem";
import MenuOpcoesAcomodacao from "../../menus/menuOpcoesAcomodacao";

export default class LiberarAcomodacao extends Processo{
    private armazem: Armazem    
    constructor() {
        super()
        this.armazem = Armazem.InstanciaUnica
        this.menu = new MenuOpcoesAcomodacao()
    }
    processar(): void {
        let idAcomodacao = this.entrada.receberNumero("Qual o id da acomocacao?")
        let acomodacao = this.armazem.findAcomodacaoPorId(idAcomodacao)
        if(!acomodacao) {
            console.log("Nenhuma acomodação encontrada com este id")
            return
        }
        acomodacao.removerCliente()
        console.log("Acomodação liberada")
    }
}