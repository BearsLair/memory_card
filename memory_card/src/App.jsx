import Header from "./components/Header";
import CardBoard from "./components/CardBoard";
import { useState, useEffect } from "react";
import { arrayShuffle } from "array-shuffle";
import "./App.css";

function App() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [scores, setScores] = useState({ score: 0, best: 0 });

  useEffect(() => {
    let pokemonList = [];

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
      let currentPokemon = {};

      fetch(url)
        .then((res) => res.json())
        .then(function (data) {
          currentPokemon.id = data.id;
          currentPokemon.name = data.name;
          currentPokemon.image =
            data.sprites.other["official-artwork"].front_default;

          pokemonList.push(currentPokemon);
        });

      setPokemonArray(arrayShuffle(pokemonList));
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
