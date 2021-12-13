import logo from '../../assets/logo.png';
import Buscador from '../Buscador';
import './Header.css'

function Header() {
    return(
        <header className="Header-container">
            <a href='/' className="Header--logo">
                <img src={logo} alt="Logo" />
            </a>
            <Buscador />
        </header>
    );
}

export default Header;