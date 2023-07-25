import { useParams, useNavigate } from "react-router-dom";
import logementsData from "../../data/logements.json";
import Slider from "../../components/Slider";
import NameSeprator from "../../components/NameSeparator";
import RatingMaker from "../../components/RatingMaker";
import Collapse from "../../components/Collapse";
import "./style.scss";

function Logement() {
    const { logementId } = useParams();
    const logement = logementsData.find(
        (logement) => logement.id === logementId
    );
    const navigate = useNavigate();
    if (!logement) {
        navigate("/not-found");
        return null;
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
                            <NameSeprator name={logement.host.name} />
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
