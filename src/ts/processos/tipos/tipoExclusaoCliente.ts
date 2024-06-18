import Processo from "../../abstracoes/processo";
import MenuTipoExclusaoCliente from "../../menus/menuTipoExclusaoCliente";
import ExcluirClienteDependente from "../excluir/excluirClienteDependente";
import ExcluirClienteTitular from "../excluir/excluirClienteTitular";

export default class TipoExclusaoCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoExclusaoCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new ExcluirClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new ExcluirClienteDependente()
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
                break
        }
    }
}