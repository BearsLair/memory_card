import Header from "./components/Header";
import CardBoard from "./components/CardBoard";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [fetchedPokemon, setFetchedPokemon] = useState([]);
  const [randomizedData, setRandomizedData] = useState([]);

  useEffect(() => {
    let pokemonList = [];

    let pokemon = {};

    try {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
        .then((res) => res.json())
        .then(function (firstPokemon) {
          firstPokemon.results.forEach(function (pokemon) {
            fetchPokemonData(pokemon);
          });
        });
    } catch (error) {
      console.log(error);
    }

    function fetchPokemonData(pokemon) {
      let url = pokemon.url;

      fetch(url)
        .then((res) => res.json())
        .then(function (data) {
          console.log(data.id);
          pokemon.id = data.id;
          console.log(data.name);
          pokemon.name = data.name;
          console.log(data.sprites.other["official-artwork"].front_default);
          pokemon.image = data.sprites.other["official-artwork"].front_default;

          pokemonList.push(pokemon);
        });

      setFetchedPokemon(pokemonList);
    }
  }, []);

  return (
    <>
      <Header />
      <CardBoard />
    </>
  );
}

export default App;
