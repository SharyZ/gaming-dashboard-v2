import { push } from "connected-react-router";
import { toast } from "react-toastify";

import { setAxiosAuthToken, toastOnError } from "../../utils/utils";

import { loginUser } from "../../api/login";
import { me } from "../../api/user";

import {
  SET_TOKEN,
  SET_CURRENT_USER,
  UNSET_CURRENT_USER,
} from "../reducers/login";
import { logoutUser } from "../../api/logout";

export const login = (userData, redirectTo) => (dispatch) => {
  loginUser(userData).then((response) => {
    const { auth_token } = response.data;
    setAxiosAuthToken(auth_token);
    dispatch(setToken(auth_token));
    dispatch(getCurrentUser(redirectTo));
  });
};

export const getCurrentUser = (redirectTo) => (dispatch) => {
  me()
    .then((response) => {
      const user = {
        username: response.data.username,
        email: response.data.email,
      };
      dispatch(setCurrentUser(user, redirectTo));
    })
    .catch((error) => {
      dispatch(unsetCurrentUser());
      toastOnError(error);
    });
};

export const setCurrentUser = (user, redirectTo) => (dispatch) => {
  localStorage.setItem("user", JSON.stringify(user));
  dispatch({
    type: SET_CURRENT_USER,
    payload: user,
  });

  if (redirectTo !== "") {
    dispatch(push(redirectTo));
  }
};

export const setToken = (token) => (dispatch) => {
  setAxiosAuthToken(token);
  localStorage.setItem("token", token);
  dispatch({
    type: SET_TOKEN,
    payload: token,
  });
};

export const unsetCurrentUser = () => (dispatch) => {
  setAxiosAuthToken("");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  dispatch({
    type: UNSET_CURRENT_USER,
  });
};

export const logout = () => (dispatch) => {
  logoutUser()
    .then((response) => {
      dispatch(unsetCurrentUser());
      dispatch(push("/home"));
      toast.success("Logout successful.");
    })
    .catch((error) => {
      dispatch(unsetCurrentUser());
      toastOnError(error);
    });
};
