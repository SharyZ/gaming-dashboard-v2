import api from "./index";

export const games = async () => {
  const GAMES_API_URL = `/api/v1/games/`;
  return await api.get(GAMES_API_URL);
};

export const game = async (gameId) => {
  const GAMES_API_URL = `/api/v1/games/`;
  return await api.get(`${GAMES_API_URL}${gameId}`);
};
