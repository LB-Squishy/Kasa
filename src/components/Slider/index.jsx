import { useState } from "react";
import "./style.scss";

function Slider({ images }) {
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
        <div className="slider">
            <div className="slider__image">
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
                <div className="slider__overlay">
                    <i
                        className="slider__overlay--arrowLeft fa-solid fa-chevron-left"
                        onClick={handlePrev}
                    ></i>
                    <div className="slider__overlay--number">{`${
                        currentSlide + 1
                    }/${images.length}`}</div>
                    <i
                        className="slider__overlay--arrowRight fa-solid fa-chevron-right"
                        onClick={handleNext}
                    ></i>
                </div>
            )}
        </div>
    );
}

export default Slider;
