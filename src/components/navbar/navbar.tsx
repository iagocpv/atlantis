import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
    const currentPage = useLocation().pathname;
    
    return (
        <nav>
            <Link to="/"><h2>Atlantis</h2></Link>
            <ul>                
                <li><Link to="/clientes" className={currentPage === '/clientes' ? 'nav-link-active' : ''}>Clientes</Link></li>
                <li><Link to="/acomodacoes" className={currentPage === '/acomodacoes' ? 'nav-link-active' : ''}>Acomodações</Link></li>
                <li><Link to="/cadastrar" className={currentPage.startsWith('/cadastrar') ? 'nav-link-active' : ''}>Cadastros</Link></li>
            </ul>
        </nav>
    )
}