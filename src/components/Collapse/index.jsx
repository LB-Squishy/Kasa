import { useState } from "react";
import "./style.scss";

function Collapse({ title, description }) {
    const [active, setActive] = useState(false);

    return (
        <div
            className={`collapse ${active ? `active` : ``}`}
            onClick={() => setActive(!active)}
        >
            <div className="collapse__title">
                <span>{title}</span>
                <div className="collapse__icon">
                    <i className="fa-solid fa-chevron-up"></i>
                </div>
            </div>
            <div className="collapse__description">{description}</div>
        </div>
    );
}

export default Collapse;
