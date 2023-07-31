import { useParams } from "react-router-dom";
import logementsData from "../../data/logements.json";
import Slider from "../../components/Slider";
import NameSeparator from "../../components/NameSeparator";
import RatingMaker from "../../components/RatingMaker";
import Collapse from "../../components/Collapse";
import "./style.scss";
import NotFound from "../../components/404";

/**
 * Ce composant créer une fiche détaillée sur un logement spécifique
 * pour le contenu de la page Logement
 *
 * Il récupère logementId depuis l'URL
 * Puis récupère le bon logement dans logementsData en fonction de l'id
 *
 * Si le logement n'est pas trouvé il affiche le composants NotFound
 * Sinon il génére la fiche du logement
 *
 * Slider: génère le carroussel
 * RatingMaker: génère les étoiles
 * NameSeparator: permet de séparer le nom du prénom après récupération dans la Data
 * Collapse: génère les collapses du logement
 */

function Logement() {
    const { logementId } = useParams();

    const logement = logementsData.find(
        (logement) => logement.id === logementId
    );

    if (!logement) {
        return <NotFound />;
    }

    return (
        <div>
            <Slider images={logement.pictures} />
            <div className="logement-infos-container">
                <div className="logement-first-infos">
                    <h1 className="logement-first-infos__title">
                        {logement.title}
                    </h1>
                    <p className="logement-first-infos__location">
                        {logement.location}
                    </p>
                    <div className="logement-first-infos__tags">
                        {logement.tags.map((tag, index) => (
                            <div
                                className="logement-first-infos__tags--style"
                                key={index}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="logement-second-infos">
                    <RatingMaker
                        className="logement-second-infos__rating"
                        check={<i className="fa-solid fa-star"></i>}
                        uncheck={
                            <i className="fa-solid fa-star logement-second-infos__rating--uncheck"></i>
                        }
                        rating={logement.rating}
                        maxRate={5}
                    />
                    <div className="logement-second-infos__owner">
                        <div className="logement-second-infos__owner--name">
                            <NameSeparator name={logement.host.name} />
                        </div>
                        <img
                            className="logement-second-infos__owner--photo"
                            src={logement.host.picture}
                            alt="Propriétaire"
                        />
                    </div>
                </div>
            </div>
            <div className="logement-infos-collapse">
                <Collapse
                    title={"Description"}
                    description={logement.description}
                />
                <Collapse
                    className="logement-infos-collapse__equipements"
                    title={"Équipements"}
                    description={logement.equipments.map(
                        (equipement, index) => (
                            <div
                                className="logement-infos-collapse__equipements--style"
                                key={index}
                            >
                                {equipement}
                            </div>
                        )
                    )}
                />
            </div>
        </div>
    );
}

export default Logement;
