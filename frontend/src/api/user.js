import api from "./index";

export const me = async () => {
  const USER_API_URL = `/api/v1/users/me/`;
  return await api.get(USER_API_URL);
};
