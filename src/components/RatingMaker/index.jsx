import "./style.scss";

function RatingMaker({ check, uncheck, rating, maxRate }) {
    const icones = [];
    for (let index = 1; index <= maxRate; index++) {
        icones.push(<div key={index}>{index <= rating ? check : uncheck}</div>);
    }
    return <div className="rating-component">{icones}</div>;
}

export default RatingMaker;
