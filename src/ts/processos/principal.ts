import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPricipal"
import CadastroAcomodacoes from "./cadastrar/cadastroAcomodacoes"
import ExcluirAcomodacao from "./excluir/excluirAcomodacao"
import HospedarCliente from "./hospedagem/hospedarCliente"
import LiberarAcomodacao from "./hospedagem/liberarAcomodacao"
import TipoAtualizarCliente from "./tipos/tipoAtualizarCliente"
import TipoCadastroCliente from "./tipos/tipoCadastroCliente"
import TipoExclusaoCliente from "./tipos/tipoExclusaoCliente"
import TipoListagemAcomodacoes from "./tipos/tipoListagemAcomodacoes"
import TipoListagemClientes from "./tipos/tipoListagemClientes"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new TipoCadastroCliente()
                this.processo.processar()
                break
            case 2:
                this.processo = new TipoAtualizarCliente()
                this.processo.processar()
                break
            case 3:
                this.processo = new TipoListagemClientes()
                this.processo.processar()
                break
            case 4:
                this.processo = new TipoExclusaoCliente()
                this.processo.processar()
                break
            case 5:
                this.processo = new TipoListagemAcomodacoes()
                this.processo.processar()
                break
            case 6:
                this.processo = new CadastroAcomodacoes()
                this.processo.processar()
                break
            case 7:
                this.processo = new HospedarCliente()
                this.processo.processar()
                break
            case 8:
                this.processo = new LiberarAcomodacao()
                this.processo.processar()
                break
            case 9:
                this.processo = new ExcluirAcomodacao()
                this.processo.processar()
                break
            case 0:
                this.execucao = false
                console.log('Até logo!')
                console.clear()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}