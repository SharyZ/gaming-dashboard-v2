import api from "./index";

export const loginUser = async (userData) => {
  const LOGIN_API_URL = `/api/v1/token/login/`;
  return await api.post(LOGIN_API_URL, userData);
};
