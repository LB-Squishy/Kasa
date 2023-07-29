import { Link } from "react-router-dom";
import codeErrorLogo from "../../assets/404.svg";
import "./style.scss";

function NotFound() {
    return (
        <div className="notfound-component">
            <img
                className="notfound-component__logo"
                src={codeErrorLogo}
                alt="Logo 404"
            />
            <p className="notfound-component__texte">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/homepage" className="notfound-component__link">
                Retourner sur la page d'accueil
            </Link>
        </div>
    );
}

export default NotFound;
