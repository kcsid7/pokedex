import './App.css';

import pokemonData from "./data/pokemonData.js"
import Pokedex from "./Pokedex.js";



function App() {
  return (
    <div className="App">
        <Pokedex pokemon={pokemonData}/>
    </div>
  );
}

export default App;
