import types from "./types";

export const loadJoke = () => ({
  type: types.LOAD_JOKE,
  payload: category
});

export const setJoke = () => ({
  type: types.LOAD_JOKE_SUCCESS,
  payload: joke
});

export const setJokeError = () => ({
  type: types.LOAD_JOKE_FAIL,
  payload: error
});
