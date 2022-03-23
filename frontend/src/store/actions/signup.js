import { toast } from "react-toastify";

import { signupUser } from "../../api/signup";

import {
  CREATE_USER_ERROR,
  CREATE_USER_SUBMITTED,
  CREATE_USER_SUCCESS,
} from "../reducers/signup";

export const signupNewUser = (userData) => (dispatch) => {
  dispatch({ type: CREATE_USER_SUBMITTED });
  signupUser(userData)
    .then((response) => {
      toast.success(
        `Account for ${userData.username} has been created successfully. Please login!`
      );
      dispatch({ type: CREATE_USER_SUCCESS });
    })
    .catch((error) => {
      if (error.response) {
        toast.error(JSON.stringify(error.response.data));
        dispatch({
          type: CREATE_USER_ERROR,
          errorData: error.response.data,
        });
      } else if (error.message) {
        toast.error(JSON.stringify(error.message));
      } else {
        toast.error(JSON.stringify(error));
      }
    });
};
