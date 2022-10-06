import {
  ALL_POKEMONS,
  POKEMON_EVOLUTION,
  SINGLE_POKEMON,
} from "../actions/actionType";

const initialState = {
  allPokemons: [],
  singlePokemon: {},
  pokemonEvolution: {},
};

function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_POKEMONS:
      return { ...state, allPokemons: action.payload };
    case SINGLE_POKEMON:
      return { ...state, singlePokemon: action.payload };
    case POKEMON_EVOLUTION:
      return { ...state, pokemonEvolution: action.payload };
    default:
      return state;
  }
}

export default pokemonReducer;
