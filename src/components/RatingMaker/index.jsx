import "./style.scss";

/**
 * Créer un système de notation visuel avec possibilité de définir le style
 *
 * @param {String} check - élément à afficher correspondant à une note validée
 * @param {String} uncheck - élément à afficher correspondant à une note non validée
 * @param {Number} rating - note à utiliser
 * @param {Number} maxRate - note maximale à utiliser
 * @returns {ReactElement} - Système de notation
 */

function RatingMaker({ check, uncheck, rating, maxRate }) {
    const icones = [];
    for (let index = 1; index <= maxRate; index++) {
        /* La méthode push permet d'ajouter une div en fonction de la condition ternaire à chaque itération de la boucle */
        icones.push(<div key={index}>{index <= rating ? check : uncheck}</div>);
    }
    return <div className="rating-component">{icones}</div>;
}

export default RatingMaker;
