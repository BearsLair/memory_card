function getPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=12")
    .then((res) => res.json())
    .then(function (firstPokemon) {
      firstPokemon.results.forEach(function (pokemon) {
        fetchPokemonData(pokemon);
      });
    });
}

function fetchPokemonData(pokemon) {
  let url = pokemon.url;

  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.id);
      console.log(data.name);
      console.log(data.sprites.other["official-artwork"].front_default);
    });
}

getPokemon();
