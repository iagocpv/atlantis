import Processo from "../../abstracoes/processo";
import DiretorCasalSimples from "../../diretores/diretorCasalSimples";
import DiretorFamiliaMais from "../../diretores/diretorFamiliaMais";
import DiretorFamiliaSimples from "../../diretores/diretorFamiliaSimples";
import DiretorFamiliaSuper from "../../diretores/diretorFamiliaSuper";
import DiretorSolteiroMais from "../../diretores/diretorSolteiroMais";
import DiretorSolteiroSimples from "../../diretores/diretorSolteiroSimples";
import Armazem from "../../dominio/armazem";
import MenuOpcoesAcomodacao from "../../menus/menuOpcoesAcomodacao";
import Acomodacao from "../../modelos/acomodacao";

export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.menu = new MenuOpcoesAcomodacao()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        console.log('Iniciando o cadastro de uma nova acomodação...')
        let diretor
        this.menu.mostrar()
        let opcao = this.entrada.receberNumero("Qual a opção desejada?")
        switch(opcao) {
            case 1:
                diretor = new DiretorSolteiroSimples()
                break
            case 2:
                diretor = new DiretorCasalSimples() 
                break
            case 3:
                diretor = new DiretorFamiliaSimples()
                break
            case 4:
                diretor = new DiretorFamiliaMais()
                break
            case 5:
                diretor = new DiretorSolteiroMais()
                break
            case 6:
                diretor = new DiretorFamiliaSuper()
                break
            default:
                console.log('Opção não entendida... :(')
                break
        }
        if(diretor) {
            this.acomodacoes.push(diretor.construir())
        }

    }
}