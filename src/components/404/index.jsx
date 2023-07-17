import "./style.scss";
import codeErrorLogo from "../../assets/404.svg";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="notfound-container">
            <img
                className="notfound-container__logo"
                src={codeErrorLogo}
                alt="Logo 404"
            />
            <p className="notfound-container__texte">
                Oups! La page que vous demandez n'existe pas.
            </p>
            <Link to="/Homepage" className="notfound-container__link">
                Retourner sur la page d'accueil
            </Link>
        </div>
    );
}

export default NotFound;
