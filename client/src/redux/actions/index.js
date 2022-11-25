import axios from "axios";

export const GET_ALL_P0KEMONS = "GET_ALL_P0KEMONS";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_CREATED = "FILTER_CREATED";
export const GET_ALL_TYPES = "GET_ALL_TYPES";
export const ORDER = "ORDER";
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID";
export const DELETE_POKEMON_BY_ID = "DELETE_POKEMON_BY_ID";

// Usa ruta para buscar todos los pokemons en nuestro back.
export const getAllPokemons = () => {
  return function (dispatch) {
    try {
      axios("https://pokemonback-production.up.railway.app/pokemons", {}).then(
        (response) => {
          return dispatch({ type: GET_ALL_P0KEMONS, payload: response.data });
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
};

// Usa ruta para buscar un pokemon por name pasado por query.
export const getPokemonByName = (name) => {
  return function (dispatch) {
    try {
      axios(
        "https://pokemonback-production.up.railway.app/pokemons?name=" + name,
        {}
      ).then((response) => {
        return dispatch({
          type: GET_POKEMON_BY_NAME,
          payload: response.data,
        });
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// Usa ruta para buscar un pokemon por id pasado por params.
export const getPokemonById = (id) => {
  return async function (dispatch) {
    try {
      let response = await axios(
        "https://pokemonback-production.up.railway.app/pokemons/" + id,
        {}
      );
      return dispatch({
        type: GET_POKEMON_BY_ID,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

// Accion para filtrar los pokemon por tipo
export const filterByType = (payload) => {
  return {
    type: FILTER_BY_TYPE,
    payload,
  };
};

// Accion para filtrar los pokemon entre creados y existentes
export const filterCreated = (payload) => {
  return {
    type: FILTER_CREATED,
    payload,
  };
};

// Usa ruta para buscar todos los tipos pokemons en nuestro back.
export const getAllTypes = () => {
  return function (dispatch) {
    try {
      axios("https://pokemonback-production.up.railway.app/types", {}).then(
        (response) => {
          return dispatch({ type: GET_ALL_TYPES, payload: response.data });
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
};

// Accion para ordenar los pokemon por alfabeto o ataque
export const order = (payload) => {
  return {
    type: ORDER,
    payload,
  };
};

// Usa ruta para crear un nuevo pokemon en nuestra DB.
export const createPokemon = (payload) => {
  return function (dispatch) {
    try {
      axios
        .post("https://pokemonback-production.up.railway.app/pokemons", payload)
        .then((response) => {
          return dispatch({
            type: CREATE_POKEMON,
            payload: response.data,
          });
        });
    } catch (err) {
      console.log(err);
    }
  };
};

// Usa ruta para eliminar un pokemon por id pasado por params.
export const deletePokemonById = (id) => {
  return async function (dispatch) {
    try {
      let response = await axios.delete(
        "https://pokemonback-production.up.railway.app/delete/" + id,
        {}
      );
      return dispatch({
        type: DELETE_POKEMON_BY_ID,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
