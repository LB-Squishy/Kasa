import "./style.scss";

function Banner({ image, texte }) {
    return (
        <div className="banner-container">
            <img className="banner-container__img" src={image} alt="Paysage" />
            <div className="banner-container__texte">
                <p className="banner-container__texte--style">{texte}</p>
            </div>
        </div>
    );
}

export default Banner;
