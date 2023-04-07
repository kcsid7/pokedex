import { v4 as uuid } from "uuid";

import Pokemon from "./Pokemon.js"

import "./Pokedex.css"
// import pokemonData from "./data/pokemonData.js"

function Pokedex(props) {
    // pokemon data will be passed as an array of objects [{}, {}, {}]

    const {pokemon:pokemonData} = props;

    return (
        <div className="Pokedex">

            <h1>Pokedex!</h1>
            {
                pokemonData.map( p => <Pokemon 
                                        dex={p.id} 
                                        key={uuid()}
                                        name={p.name}
                                        type={p.type}
                                        experience={p.base_experience}
                                        /> )
            }
        </div>
    )
}

export default Pokedex;