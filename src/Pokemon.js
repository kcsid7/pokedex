import "./Pokemon.css"


function Pokemon(props) {

    const {dex, name, type, experience:exp} = props;

    return (
        <div className="Pokemon">
            <h2 className="Pokemon-name">{name}</h2>
            <img
                className="Pokemon-image"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dex}.png`} 
            />
            <div className="Pokemon-type"><strong>Type:</strong> {type}</div>
            <div className="Pokemon-exp"><strong>Exp:</strong> {exp}</div>
            
        </div>
    )
}

export default Pokemon;