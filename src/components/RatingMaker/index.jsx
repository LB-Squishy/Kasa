import "./style.scss";

function RatingMaker({ check, uncheck, rating, maxRate }) {
    const icones = [];
    for (let i = 1; i <= maxRate; i++) {
        icones.push(i <= rating ? check : uncheck);
    }
    return <div className="rating-container">{icones}</div>;
}

export default RatingMaker;
