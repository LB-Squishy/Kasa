import { Link } from "react-router-dom";
import "./style.scss";

function Card({ title, cover, logementId }) {
    return (
        <Link to={`/Fiche-Logement/${logementId}`}>
            <div className="card">
                <div className="card__img">
                    <img className="card__img--cover" src={cover} alt={title} />
                    <div className="card__img--overlay"></div>
                </div>
                <div className="card__texte">
                    <p className="card__texte--style">{title}</p>
                </div>
            </div>
        </Link>
    );
}

export default Card;
