import aboutData from "../../data/about.json";
import Banner from "../../components/Banner";
import AboutBanner from "../../assets/about-banner.png";
import Collapse from "../../components/Collapse";
import "./style.scss";

/**
 * Ce composant créer le contenu de la page About
 *
 * Il génère une bannière avec le composant Banner
 * Puis créer une série de Collapse à partir de aboutData
 */

function About() {
    return (
        <div>
            <Banner image={AboutBanner} texte="" />
            <div className="collapse-container">
                {aboutData.map((info) => (
                    <Collapse
                        key={info.id}
                        title={info.title}
                        description={info.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default About;
