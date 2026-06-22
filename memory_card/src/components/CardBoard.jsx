import Card from "./Card";

function CardBoard({ pokemonArray, handleCardTracking }) {
  return (
    <div className="gameboard-grid">
      {pokemonArray.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            image={pokemon.image}
            name={pokemon.name}
            handleClick={handleCardTracking}
          />
        );
      })}
    </div>
  );
}

export default CardBoard;
