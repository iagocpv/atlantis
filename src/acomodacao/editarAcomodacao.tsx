import { BsPencil } from "react-icons/bs"
import { AcomodacaoType } from "../types/acomodacaoType"
import { useState } from "react"
import { IMaskInput } from "react-imask";
import Modal from 'react-modal';
import { ClienteType } from "../types/clienteType";

type Props = {
    cliente: ClienteType
    acomodacao: AcomodacaoType
}

const customStyles = {
    content: {
        backgroundColor: "rgb(216, 240, 255)",
        padding: "0 1em",
        marginLeft: "15%",
        marginRight: "15%",
        marginTop: "0%",
        overflow: "auto",
    },
};

export default function EditarAcomodacao(props: Props) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [secaoForm, setSecaoForm] = useState('Informações Básicas');
    const [Quarto, setQuarto] = useState(props.acomodacao.numero)
    const [idTitular, setIdTitular] = useState(props.cliente.id)
    const [idAcomodacao, setIdAcomodacao] = useState(props.acomodacao.id)
    const [tipoAcomodacao, setTipoAcomodacao] = useState(props.acomodacao.nome)

    function handleChange(event: any, setter: any) {
        const value = event.target.value
        setter(value)
    }
    function changeSecao(valor: string) {
        setSecaoForm(valor)
    }

    return (
        <>
            <BsPencil onClick={handleShow} className="edit icone" />

            <Modal
                isOpen={show}
                onRequestClose={handleClose}
                contentLabel="Editar cliente"
                style={customStyles}
            >
                <div className="modal-container">
                    <div className="modal-header">
                        <div></div>
                        <h1>Editar Acomodação</h1>
                        <div className="pointer" onClick={handleClose}><b>Fechar</b></div>
                    </div>
                    <div className="modal-body">
                        <form id='editar-cliente'>
                            <div className='seletor-secao'>
                                <div className={secaoForm === 'Informações Básicas' ? 'secao-ativa' : ''} onClick={() => changeSecao('Informações Básicas')}>Informações</div>
                            </div>
                            <div className="cliente-select">
                                <label htmlFor="Acomodacao">Tipo de Acomodação:</label>
                                <select value={tipoAcomodacao} onChange={e => setTipoAcomodacao(e.target.value)}>
                                    <option value={"Casal Simples"}>Casal Simples</option>
                                    <option value={"Familia Simples"}>Familia Simples</option>
                                    <option value={"Familia Mais"}>Familia Mais</option>
                                    <option value={"Familia Super"}>Familia Super</option>
                                    <option value={"Solteiro Simples"}>Solteiro Simples</option>
                                    <option value={"Solteiro Mais"}>Solteiro Mais</option>
                                </select>
                            </div>
                            <h4>{secaoForm}</h4>
                            {secaoForm === 'Informações Básicas' &&
                                <section>
                                    <div className="input-item">
                                        <label htmlFor="idAcomodacao">Id Acomodação</label>
                                        <input className="form-control" id="idAcomodacao" type="text" defaultValue={props.acomodacao.id} onChange={(e) => handleChange(e, setIdAcomodacao)}></input>
                                    </div>
                                    <div className="input-item">
                                        <label htmlFor="nome">Quarto</label>
                                        <input className="form-control" id="quarto" type="text" defaultValue={props.acomodacao.numero} onChange={(e) => handleChange(e, setQuarto)}></input>
                                    </div>
                                    <div className="input-item">
                                        <label htmlFor="nomeSocial">id Cliente</label>
                                        <input className="form-control" id="nomeSocial" type="text" defaultValue={props.acomodacao.cliente?.id} onChange={(e) => handleChange(e, setIdTitular)}></input>
                                    </div>
                                </section>
                            }
                        </form>
                    </div>
                    <div className="modal-footer">
                        <div className="cancel button" onClick={handleClose}>Cancelar</div>
                        <div className="save button" onClick={handleClose}>Salvar</div>
                    </div>
                </div>
            </Modal>
        </>

    )
}
