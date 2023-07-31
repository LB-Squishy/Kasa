import logementsData from "../../data/logements.json";
import Banner from "../../components/Banner";
import HomePageBanner from "../../assets/homepage-banner.png";
import Card from "../../components/Card";
import "./style.scss";

/**
 * Ce composant créer le contenu de la page Homepage
 *
 * Il génère une bannière avec le composant Banner
 * Puis créer une card pour chaque logement présent dans logementsData
 *
 * L'id du logement est transmis à la Card
 * LogementId permet alors de générer une url propre à chaque logement au clic
 * dans le router
 *
 */

function Homepage() {
    return (
        <div>
            <Banner
                image={HomePageBanner}
                texte="Chez vous, partout et ailleurs"
            />
            <div className="card-container">
                {logementsData.map((logement) => (
                    <Card
                        key={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                        logementId={logement.id}
                    />
                ))}
            </div>
        </div>
    );
}

export default Homepage;
