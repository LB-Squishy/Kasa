import "./style.scss";

/**
 * Sépare le prénom et le nom d'une chaine de caractère avec la méthode split
 *
 * @param {String} name - Nom complet
 * @returns {ReactElement}
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
