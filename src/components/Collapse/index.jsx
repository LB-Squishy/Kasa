import { useState } from "react";
import "./style.scss";

function Collapse({ title, description }) {
    const [active, setActive] = useState(false);

    return (
        <div
            className={`collapse-component ${active ? `active` : ``}`}
            onClick={() => setActive(!active)}
        >
            <div className="collapse-component__title">
                <span>{title}</span>
                <div className="collapse-component__icon">
                    <i className="fa-solid fa-chevron-up"></i>
                </div>
            </div>
            <div className="collapse-component__description">{description}</div>
        </div>
    );
}

export default Collapse;
