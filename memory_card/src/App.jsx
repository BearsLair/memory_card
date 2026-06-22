import Header from "./components/Header";
import CardBoard from "./components/CardBoard";
import { useState, useEffect } from "react";
import { arrayShuffle } from "array-shuffle";
import "./App.css";

function App() {
  const [pokemonArray, setPokemonArray] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [scores, setScores] = useState({ score: 0, best: 0 });

  // At game end, reset tracked cards to empty array, update best score, and randomize cards
  // OR continue tracking already clicked cards, update current score, randomize cards
  const handleCardTracking = (cardId) => {
    // 1. Check if the card was already clicked
    if (clickedCards.includes(cardId)) {
      // User lost: Reset game
      setScores((prev) => ({
        ...prev,
        score: 0,
        best: prev.score > prev.best ? prev.score : prev.best,
      }));
      setClickedCards([]);
    } else {
      // User guessed right: Update score and add ID
      setScores((prev) => ({
        ...prev,
        score: prev.score + 1,
      }));
      setClickedCards((prev) => [...prev, cardId]);
    }

    // 2. Shuffle cards on every click (regardless of win/loss)
    setPokemonArray((prev) => arrayShuffle(prev));
  };

  // Fetch cards from server on page load
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
      <Header scores={scores} />
      <CardBoard
        pokemonArray={pokemonArray}
        handleCardTracking={handleCardTracking}
      />
    </>
  );
}

export default App;
