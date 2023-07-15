import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <Link to="/Homepage">Accueil</Link>
            <Link to="/A-Propos">A propos</Link>
        </nav>
    );
}

export default Header;
