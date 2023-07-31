import "./style.scss";

/**
 * Sépare le prénom et le nom d'une chaine de caractère avec la méthode split
 *
 * @param {string} name - Nom complet
 * @returns {composant} - Une <div> qui affiche le prénom et le nom dans 2 éléments <p> distinct
 *
 */

function NameSeparator({ name }) {
    const [firstName, lastName] = name.split(" ");
    return (
        <div className="name-separator-component">
            <p>{firstName}</p>
            <p>{lastName}</p>
        </div>
    );
}

export default NameSeparator;
