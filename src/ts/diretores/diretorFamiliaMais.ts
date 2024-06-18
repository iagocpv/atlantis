import ConstrutorAcomodacao from "../construtores/construtorAcomodacao";
import Acomodacao from "../modelos/acomodacao";
import Diretor from "../abstracoes/diretor";
import { NomeAcomodacao } from "../enumeracoes/nomeAcomodacao";

export default class DiretorFamiliaMais extends Diretor<Acomodacao> {

    constructor() {
        super()
        this.construtor = new ConstrutorAcomodacao()
    }

    public construir(): Acomodacao {
        let objetoConstrutor = this.construtor as ConstrutorAcomodacao
        objetoConstrutor.NomeAcomodacao = NomeAcomodacao.FamiliaMais
        objetoConstrutor.CamaCasal = 1
        objetoConstrutor.CamaSolteiro = 5
        objetoConstrutor.Climatizacao = true
        objetoConstrutor.Garagem = 2
        objetoConstrutor.Suite = 2
        return objetoConstrutor.construir()
    }
}