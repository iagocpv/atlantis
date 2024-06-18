import Processo from "../../abstracoes/processo";
import Documento from "../../modelos/documento";

export default class AtualizarDocumento extends Processo {
    documento: Documento    
    constructor(documento: Documento) {
        super();
        this.documento = documento
    }
    
    processar(): void {
        let numero = this.entrada.receberTexto('Qual o número do documento?')
        let dataExpedicao = this.entrada.receberData('Qual a data de expedição do documento?')
        this.documento.atualizar(numero, this.documento.Tipo, dataExpedicao)
    }

}