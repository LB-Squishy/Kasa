import "./style.scss";

function Banner({ image, texte }) {
    return (
        <div className="banner-component">
            <img className="banner-component__img" src={image} alt="Paysage" />
            <div className="banner-component__texte">
                <p className="banner-component__texte--style">{texte}</p>
            </div>
        </div>
    );
}

export default Banner;
