import Banner from "../../components/Banner";
import Card from "../../components/Card";
import logementsData from "../../data/logements.json";
import HomePageBanner from "../../assets/homepage-banner.png";
import "./style.scss";

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
                    />
                ))}
            </div>
        </div>
    );
}

export default Homepage;
