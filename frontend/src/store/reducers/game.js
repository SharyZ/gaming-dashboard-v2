import { GET_GAMES, SET_GAME } from "../actions/game";

const initialState = {
  games: [],
  game: {},
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GAMES:
      return {
        ...state,
        games: action.payload,
      };
    case SET_GAME:
      return {
        ...state,
        game: action.payload,
      };
    default:
      return state;
  }
};
