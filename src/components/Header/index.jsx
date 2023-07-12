import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <Link to="/Kasa">Accueil</Link>
            <Link to="/Kasa/A-Propos">A propos</Link>
        </nav>
    );
}

export default Header;
