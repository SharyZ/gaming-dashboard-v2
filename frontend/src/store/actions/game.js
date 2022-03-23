import { games, game } from "../../api/game";
import { toastOnError } from "../../utils/utils";

export const GET_GAMES = "GET_GAMES";
export const SET_GAME = "SET_GAME";

export const getGames = () => (dispatch) => {
  games().then((response) => {
    dispatch({
      type: GET_GAMES,
      payload: response.data,
    });
  });
};

export const getGame = (gameId) => (dispatch) => {
  game(gameId)
    .then((response) => {
      dispatch({
        type: SET_GAME,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: SET_GAME,
        payload: {},
      });
      toastOnError(error);
    });
};
