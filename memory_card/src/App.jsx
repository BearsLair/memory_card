import Header from "./components/Header";
import CardBoard from "./components/CardBoard";
import { useState, useEffect } from "react";
import { arrayShuffle } from "array-shuffle";
import "./App.css";

function App() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [scores, setScores] = useState({ score: 0, best: 0 });

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
      .then((res) => res.json())
      .then((firstPokemon) => {
        // Array of fetched promises
        const fetchPromises = firstPokemon.results.map((pokemon) => {
          return fetch(pokemon.url)
            .then((res) => res.json())
            .then((data) => {
              return {
                id: data.id,
                name: data.name,
                image: data.sprites.other["official-artwork"].front_default,
              };
            });
        });

        // Wait for ALL promises to complete before shuffling array.
        Promise.all(fetchPromises)
          .then((completedList) => {
            setPokemonArray(arrayShuffle(completedList));
          })
          .catch((err) => console.error("Error retreving details:", err));
      });
  }, []);

  return (
    <>
      <Header />
      <CardBoard pokemonArray={pokemonArray} />
    </>
  );
}

export default App;
