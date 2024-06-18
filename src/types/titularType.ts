import { Endereco } from "./enderecoType"
import { Telefone } from "./telefoneType"

export type TitularType = {
    id: number
    nome?: string
    nomeSocial?: string
    telefones?: Telefone[]
    endereco?: Endereco
}