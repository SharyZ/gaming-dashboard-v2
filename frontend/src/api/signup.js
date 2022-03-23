import api from "./index";

export const signupUser = async (userData) => {
  const SIGNUP_API_URL = `/api/v1/users/`;
  return await api.post(SIGNUP_API_URL, userData);
};
