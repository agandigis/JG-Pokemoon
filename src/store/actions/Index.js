import { ALL_POKEMONS, SINGLE_POKEMON, POKEMON_EVOLUTION } from "./actionType";
import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/pokemon";

export const fetchAllPokemonSuccess = (payload) => {
  return {
    type: ALL_POKEMONS,
    payload,
  };
};

export const fetchAllPokemons = (offset) => {
  return async (dispatch, getState) => {
    try {
      let response = await axios.get(`${baseURL}?offset=${offset}&limit=20`);

      let dataPokemon = response.data.results.map(async (el) => {
        const data = await axios.get(`${baseURL}/${el.name}`);
        // console.log(
        //   data.data.sprites.other["official-artwork"]["front_default"]
        // );

        return data.data;
      });

      const pokemon = await Promise.all(dataPokemon);

      dispatch(fetchAllPokemonSuccess(pokemon));
    } catch (err) {
      console.log("err");
    }
  };
};

export const fetchSinglePokemonSuccess = (payload) => {
  return {
    type: SINGLE_POKEMON,
    payload,
  };
};

export const fetchSinglePokemon = (name) => {
  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.get(`${baseURL}/${name}`);

        dispatch(fetchSinglePokemonSuccess(response.data));
        resolve(response.data.data);
      } catch (err) {
        reject(err);
      }
    });
  };
};

export const fetchPokemonEvolutionSuccess = (payload) => {
  return {
    type: POKEMON_EVOLUTION,
    payload,
  };
};

export const fetchPokemonEvolution = (id) => {
  return (dispatch, getState) => {
    return new Promise(async (resolve, reject) => {
      try {
        let species = await axios.get(`${baseURL}-species/${id}`);

        let chain = await axios.get(species.data.evolution_chain.url);

        let evolution = await axios.get(
          `${baseURL}/${chain.data.chain.evolves_to[0].species.name}`
        );

        dispatch(fetchPokemonEvolutionSuccess(evolution.data));
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  };
};
