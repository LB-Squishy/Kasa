import "./style.scss";

/**
 * Créer un système de notation visuel avec possibilité de définir le style
 *
 * @param {string} check - élément à afficher correspondant à une note validée
 * @param {string} uncheck - élément à afficher correspondant à une note non validée
 * @param {number} rating - note à utiliser
 * @param {number} maxRate - note maximale à utiliser
 * @returns {composant} - Système de notation
 *
 * La méthode push permet d'ajouter une div en fonction de la
 * condition ternaire à chaque itération de la boucle
 */

function RatingMaker({ check, uncheck, rating, maxRate }) {
    const icones = [];
    for (let index = 1; index <= maxRate; index++) {
        icones.push(<div key={index}>{index <= rating ? check : uncheck}</div>);
    }
    return <div className="rating-component">{icones}</div>;
}

export default RatingMaker;
