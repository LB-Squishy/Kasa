import { useState } from "react";
import "./style.scss";

/**
 * Créer une Collpase
 *
 * @param {String} title - Titre de la collapse
 * @param {String} description - Contenu de la collapse
 * @returns {ReactElement} - Collapse
 */

function Collapse({ title, description }) {
    /**
     * useState gère l'état de la collapse
     * useState: initialise l'etat à false (replié)
     * state: représente l'état actuel de la collapse
     * setState: au clic inverse l'état
     */
    const [state, setState] = useState(false);
    return (
        <div
            className={`collapse-component ${state ? `active` : ``}`}
            onClick={() => setState(!state)}
        >
            <div className="collapse-component__title">
                <span>{title}</span>
                <div className="collapse-component__icon">
                    <i className="fa-solid fa-chevron-up"></i>
                </div>
            </div>
            <div className="collapse-component__description">{description}</div>
        </div>
    );
}

export default Collapse;
