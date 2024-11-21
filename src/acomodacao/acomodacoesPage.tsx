import { useEffect, useState } from "react"
import { AcomodacaoType } from "../types/acomodacaoType"
import Acomodacao from "./acomodacao"

export default function AcomodacoesPage() {
    let acomodacaoList: AcomodacaoType[] = [{id: 1, nome: 'Solteiro Simples', numero: 15, cliente:{id: 1, nome: 'Titular'}}, 
        {id: 2, nome: 'Familia Simples', numero: 20}, {id: 3, nome: 'Familia Super', numero: 50}, 
    ]
    let [acomodacoes, setAcomodacoes] = useState<AcomodacaoType[]>(acomodacaoList)

    useEffect(() => {         
    }, [acomodacoes])

    function deletarAcomodacao(id: number) {
        setAcomodacoes(acomodacoes
            .filter(a => a.id != id))
    }

    return (
        <div className="list">
            <h2>Acomodações</h2>
            <div className="list-itens">
                {acomodacoes.map(a => {
                    return (
                        <Acomodacao
                        acomodacao={a}
                        key={a.id}
                        deletarAcomodacao = {deletarAcomodacao}
                        ></Acomodacao>
                    )                
                })}
            </div>
        </div>
    )
}