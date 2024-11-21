import { Telefone } from "./telefoneType"
import { Endereco } from "./enderecoType"
import { Documento } from "./documentoType"
import { DependenteType } from "./dependenteType"
import { TitularType } from "./titularType"

export type ClienteType = {
    id: number
    nome?: string
    nomeSocial?: string
    dataNascimento?: Date
    dataCadastro?: Date
    telefones?: Telefone[]
    endereco?: Endereco
    documentos?: Documento[]
    dependentes?: DependenteType[]
    titular?: TitularType
}