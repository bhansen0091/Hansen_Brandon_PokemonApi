import { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [allPokemon, setAllPokemon] = useState([])

  const getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=898")
      .then( res => res.json() )
      .then( res => setAllPokemon(res.results) )
      .catch( err => console.log(err) );
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Pokemon</h1>
        <div className="">
          <button 
            type="button" 
            className="btn btn-sm btn-primary border-dark"
            onClick = {getPokemon}
          >Get Pokemon
          </button>
        </div>
        <div className="d-flex flex-wrap justify-content-evenly">
          {
            allPokemon.map((p,i) => 
              <PokemonCard
                pokemonName = {p.name}
                idx = {i+1}
                key = {i}
              />
            )
          }
        </div>
      </div>
      
    </div>
  );
}

export default App;
