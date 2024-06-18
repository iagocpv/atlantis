import { useState } from "react"
import { BsXLg } from "react-icons/bs"
import { AcomodacaoType } from "../types/acomodacaoType"
import EditarAcomodacao from "./editarAcomodacao"

type Props = {
    acomodacao: AcomodacaoType,
    deletarAcomodacao: Function
}
export default function Acomodacao(props: Props) {
    let [isOpen, setIsOpen] = useState(false)

    function toggleOpen() {
        setIsOpen(!isOpen)
    }
    return (        
        <div className="item-container">
            <div className="item-sub">
                <div className="item">
                    <div className="flex">
                        <div><strong>Id: {props.acomodacao.id}</strong></div>
                        <div><b>Quarto: </b>{props.acomodacao.numero}</div>
                        <div>{props.acomodacao.cliente ? <div><b>Cliente: </b>{props.acomodacao.cliente?.nome}</div> : 'Livre'}</div>
                    </div>
                    <div className="flex">
                        <div className="tipo"><strong>Tipo:</strong> {props.acomodacao.nome}</div>
                    </div>
                </div>
                <div className="acoes">
                    <EditarAcomodacao
                        acomodacao={props.acomodacao} cliente={{
                            id: 0,
                            nome: undefined,
                            nomeSocial: undefined,
                            dataNascimento: undefined,
                            dataCadastro: undefined,
                            telefones: undefined,
                            endereco: undefined,
                            documentos: undefined,
                            dependentes: undefined,
                            titular: undefined
                        }}                    ></EditarAcomodacao>
                    <BsXLg className="icone" style={{color: 'red'}} onClick={() => props.deletarAcomodacao(props.acomodacao.id)}/>
                </div>
            </div>
        </div>
    )
}