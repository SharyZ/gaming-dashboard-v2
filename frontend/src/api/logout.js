import api from "./index";

export const logoutUser = async () => {
  const LOGOUT_API_URL = `/api/v1/token/logout/`;
  return await api.post(LOGOUT_API_URL);
};
