import { SetStateAction, useState } from "react"

export default function CadastrarCliente() {
    const [nome, setNome] = useState('')
    const [nomeSocial, setNomeSocial] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [cep, setCep] = useState('')
    const [telefone1, setTelefone1] = useState('')
    const [telefone2, setTelefone2] = useState('')
    const [tipoCliente, setTipoCliente] = useState('titular')
    const [secaoForm, setSecaoForm] = useState('Informações Básicas');
    const [rg, setRg] = useState('');
    const [cpf, setCpf] = useState('');
    const [passaporte, setPassaporte] = useState('');
    const [idTitular, setIdTitular] = useState('')

    const cadastrar = () => {
        setNome('')
        setNomeSocial('')
        setRua('')
        setBairro('')
        setCidade('')
        setEstado('')
        setCep('')
        setTelefone1('')
        setTelefone2('')
    }
    function changeSecao(valor: string){
        setSecaoForm(valor)
    }

    return (
        <div className="form-cadastro">
            <h2>Cadastrar cliente</h2>
            
            <form>
                <div className="cliente-select">
                    <label htmlFor="cliente">Tipo de cliente:</label>
                    <select value={tipoCliente} onChange={e => setTipoCliente(e.target.value)}>
                        <option value={"titular"}>Titular</option>
                        <option value={"dependente"}>Dependente</option>
                    </select>
                </div>
                <div className='seletor-secao'>
                    <div className={secaoForm === 'Informações Básicas' ? 'secao-ativa' : ''} onClick={() => changeSecao('Informações Básicas')}>Informações</div>
                    {tipoCliente === 'titular' &&  <div className={secaoForm === 'Endereço' ? 'secao-ativa' : ''} onClick={() => changeSecao('Endereço')}>Endereço</div>}
                    <div className={secaoForm === 'Telefones' ? 'secao-ativa' : ''} onClick={() => changeSecao('Telefones')}>Telefones</div>
                    <div className={secaoForm === 'Documentos' ? 'secao-ativa' : ''} onClick={() => changeSecao('Documentos')}>Documentos</div>
                    {tipoCliente === 'dependente' && <div className={secaoForm === 'Titular' ? 'secao-ativa' : ''} onClick={() => changeSecao('Titular')}>Titular</div>}
                </div>
                {   secaoForm ===  'Informações Básicas' && 
                    <div>
                        <div className="input-group mb-3">
                            <input type="text" 
                            value={nome} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setNome(e.target.value)}
                            placeholder="Nome *" aria-label="Nome" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text"
                            value={nomeSocial} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setNomeSocial(e.target.value)}
                            placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text"
                            value={nomeSocial} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setNomeSocial(e.target.value)}
                            placeholder="Data de nascimento *" aria-label="Data de nascimento" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                }
                {   (secaoForm === 'Endereço' && tipoCliente === 'titular') &&
                    <div>
                        <div>
                            <div className="input-group mb-3">
                                <input type="text"
                                value={rua} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setRua(e.target.value)}
                                placeholder="Rua *" aria-label="Rua" aria-describedby="basic-addon1" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="text"
                                value={bairro} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setBairro(e.target.value)}
                                placeholder="Bairro *" aria-label="Bairro" aria-describedby="basic-addon1" />
                            </div>
                            <div>
                                <input type="text"
                                value={cidade} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCidade(e.target.value)}
                                placeholder="Cidade *" aria-label="Cidade" aria-describedby="basic-addon1" />
                            </div>
                            <div>
                                <input type="text"
                                value={estado} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEstado(e.target.value)}
                                placeholder="Estado *" aria-label="Estado" aria-describedby="basic-addon1" />
                            </div>
                            <div>
                                <input type="text"
                                value={cep} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCep(e.target.value)}
                                placeholder="CEP *" aria-label="CEP" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                }
                { secaoForm === 'Telefones' &&
                    <div>
                        <div className="input-group mb-4">
                            <input type="text"
                            value={telefone1} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setTelefone1(e.target.value)}
                            placeholder="Telefone 1 *" aria-label="Telefone 1" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text"
                            value={telefone2} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setTelefone2(e.target.value)}
                            placeholder="Telefone 2" aria-label="Telefone 2" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                }    
                { secaoForm === 'Documentos' &&
                    <div>
                        <div className="input-group mb-4">
                            <input type="text"
                            value={rg} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setRg(e.target.value)}
                            placeholder="RG *" aria-label="RG" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text"
                            value={cpf} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setCpf(e.target.value)}
                            placeholder="CPF *" aria-label="CPF" aria-describedby="basic-addon1" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text"
                            value={passaporte} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPassaporte(e.target.value)}
                            placeholder="Passaporte" aria-label="passaporte" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                }
                { secaoForm === 'Titular' &&  
                    <div>
                        <div className="input-group mb-3">
                            <input type="text" 
                            value={idTitular} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setIdTitular(e.target.value)}
                            placeholder="ID Titular *" aria-label="Id Titular" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                }
                <div>
                    <div className="button save" onClick={cadastrar}>Cadastrar Cliente</div>
                </div>
            </form>
        </div>
    )
}