import logementsData from "../../data/logements.json";
import "./style.scss";
import Banner from "../../components/Banner";
import HomePageBanner from "../../assets/homepage-banner.png";
import Card from "../../components/Card";

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
