import Processo from "../abstracoes/processo";
import ImpressorEndereco from "../impressores/impressorEndereco";
import Entrada from "../io/entrada";
import Cliente from "../modelos/cliente";

export default class AtualizarEnderecoCliente extends Processo{
    private cliente: Cliente
    protected entrada = new Entrada()
    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente
    }

    processar(): void {
        let impressor = new ImpressorEndereco(this.cliente.Endereco)
        console.log("Endereço atual :")
        console.log(impressor.imprimir())
    
        console.log('Coletando os dados de endereço...')
        let rua = this.entrada.receberTexto('Qual a nova rua?')
        let bairro = this.entrada.receberTexto('Qual o novo bairro?')
        let cidade = this.entrada.receberTexto('Qual a nova cidade?')
        let estado = this.entrada.receberTexto('Qual o novo estado?')
        let pais = this.entrada.receberTexto('Qual o novo país?')
        let codigoPostal = this.entrada.receberTexto('Qual o novo código postal?')
        this.cliente.Endereco.atualizar(rua, bairro, cidade, estado, pais, codigoPostal)
        this.cliente.atualizarEnderecoDependentes()
    }
}