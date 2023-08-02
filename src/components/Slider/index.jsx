import { useState } from "react";
import "./style.scss";

/**
 * Créer un carrousel
 *
 * @param {String} images - correspond aux images à intégrer au Slider
 * @returns {ReactElement} - Carrousel
 */

function Slider({ images }) {
    /**
     * useState gère l'état du carrousel
     * useState: initialise l'etat à 0 (index de l'image courante)
     * currentSlide: représente la slide actuelle
     * setCurrentSlide: au clic change l'index
     */
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((slideIndex) =>
            slideIndex === 0 ? images.length - 1 : slideIndex - 1
        );
    };
    const handleNext = () => {
        setCurrentSlide((slideIndex) =>
            slideIndex === images.length - 1 ? 0 : slideIndex + 1
        );
    };

    return (
        <div className="slider-component">
            <div className="slider-component__image">
                {images.map((image, index) => (
                    <img
                        className={index === currentSlide ? "active" : ""}
                        key={index}
                        src={image}
                        alt={`Vue du logement ${index + 1}`}
                    />
                ))}
            </div>
            {images.length > 1 && (
                <div className="slider-component__overlay">
                    <i
                        className="slider-component__overlay--arrowLeft fa-solid fa-chevron-left"
                        onClick={handlePrev}
                    ></i>
                    <div className="slider-component__overlay--number">{`${
                        currentSlide + 1
                    }/${images.length}`}</div>
                    <i
                        className="slider-component__overlay--arrowRight fa-solid fa-chevron-right"
                        onClick={handleNext}
                    ></i>
                </div>
            )}
        </div>
    );
}

export default Slider;
