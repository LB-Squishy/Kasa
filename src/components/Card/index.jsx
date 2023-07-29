import { Link } from "react-router-dom";
import "./style.scss";

function Card({ title, cover, logementId }) {
    return (
        <Link to={`/fiche-logement/${logementId}`}>
            <div className="card-component">
                <div className="card-component__img">
                    <img
                        className="card-component__img--cover"
                        src={cover}
                        alt={title}
                    />
                    <div className="card-component__img--overlay"></div>
                </div>
                <div className="card-component__texte">
                    <p className="card-component__texte--style">{title}</p>
                </div>
            </div>
        </Link>
    );
}

export default Card;
