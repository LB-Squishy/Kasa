import { Link } from "react-router-dom";
import "./style.scss";
import logoColor from "../../assets/LOGOcolor.svg";
import logoWhite from "../../assets/LOGOwhite.svg";

function Layout({ children }) {
    return (
        <div className="layout-container">
            <header className="header-container">
                <img
                    className="header-container__logo"
                    src={logoColor}
                    alt="Logo Kasa"
                />
                <nav className="header-container__nav">
                    <Link
                        to="/Homepage"
                        className="header-container__nav--underline"
                    >
                        Accueil
                    </Link>
                    <Link
                        to="/A-Propos"
                        className="header-container__nav--underline"
                    >
                        A Propos
                    </Link>
                </nav>
            </header>
            <main className="main-container">{children}</main>
            <footer className="footer-container">
                <img
                    className="footer-container__logo"
                    src={logoWhite}
                    alt="Logo Kasa"
                />
                <p className="footer-container__texte">
                    © 2020 Kasa. All rights reserved
                </p>
            </footer>
        </div>
    );
}

export default Layout;
