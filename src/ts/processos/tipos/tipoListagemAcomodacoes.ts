import Processo from "../../abstracoes/processo";
import MenuTipoListagemAcomodacoes from "../../menus/menuTipoListagemAcomodacoes";
import ListagemAcomodacoes from "../listar/listagemAcomodacoes";
import ListagemAcomodacoesOcupadas from "../listar/listagemAcomodacoesOcupadas";
import ListagemAcomodacoesLivres from "../listar/listagemAcomodacoesLivres";

export default class TipoListagemAcomodacoes extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoListagemAcomodacoes()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new ListagemAcomodacoes()
                this.processo.processar()
                break;
            case 2:
                this.processo = new ListagemAcomodacoesOcupadas()
                this.processo.processar()
                break 
            case 3:
                this.processo = new ListagemAcomodacoesLivres()
                this.processo.processar()
                break      
            default:
                console.log('Opção não entendida... :(')
                break
        }
    }
}