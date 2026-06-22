import Card from "./Card";

function CardBoard({ pokemonArray }) {
  console.log("pokemonArray", pokemonArray);
  return (
    <div className="gameboard-grid">
      {pokemonArray.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            image={pokemon.image}
            name={pokemon.name}
          />
        );
      })}
    </div>
  );
}

export default CardBoard;
