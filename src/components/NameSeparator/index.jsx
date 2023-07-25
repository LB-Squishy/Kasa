import "./style.scss";

function NameSeprator({ name }) {
    const [firstName, lastName] = name.split(" ");
    return (
        <div className="name-container">
            <p>{firstName}</p>
            <p>{lastName}</p>
        </div>
    );
}

export default NameSeprator;
