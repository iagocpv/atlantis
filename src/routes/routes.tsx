import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import ClientesPage from "../cliente/clientesPage";
import AcomodacoesPage from "../acomodacao/acomodacoesPage";
import Navbar from "../components/navbar/navbar";
import CadastroPage from "../pages/cadastroPage";
import CadastrarCliente from "../cliente/cadastrarCliente";
import CadastrarAcomodacao from "../acomodacao/cadastrarAcomodacao";

export default function Routes() {
    return (
        <BrowserRouter>
            <Navbar></Navbar>
            <Switch>
                <Route path="/" element={<ClientesPage />}/>
                <Route path="/clientes" element={<ClientesPage />}/>
                <Route path="/acomodacoes" element={<AcomodacoesPage />}/>
                <Route path="/cadastrar" element={<CadastroPage />}/>
                <Route path="/cadastrarCliente" element={<CadastrarCliente />}/>
                <Route path="/cadastrarAcomodacao" element={<CadastrarAcomodacao />}/>
            </Switch>
        </BrowserRouter>
    )
}   