import "./style.scss";

function NameSeprator({ name }) {
    const [firstName, lastName] = name.split(" ");
    return (
        <div className="name-separator-component">
            <p>{firstName}</p>
            <p>{lastName}</p>
        </div>
    );
}

export default NameSeprator;
