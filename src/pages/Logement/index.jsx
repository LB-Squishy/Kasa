import { useParams, useNavigate } from "react-router-dom";
import logementsData from "../../data/logements.json";
import "./style.scss";

function Logement() {
    const { logementId } = useParams();
    const logement = logementsData.find(
        (logement) => logement.id === logementId
    );
    const navigate = useNavigate();
    if (!logement) {
        navigate("/NotFound");
        return null;
    }
    return (
        <div>
            <h1>{logement.title}</h1>
        </div>
    );
}

export default Logement;
