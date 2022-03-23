export const CREATE_USER_SUBMITTED = "CREATE_USER_SUBMITTED";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_ERROR = "CREATE_USER_ERROR";

const initialState = {
  usernameError: "",
  emailError: "",
  passwordError: "",
  re_passwordError: "",
  isSubmitted: false,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER_SUBMITTED:
      return {
        ...state,
        isSubmitted: true,
      };
    case CREATE_USER_ERROR:
      const errorState = {
        ...state,
      };
      if (action.errorData.hasOwnProperty("username")) {
        errorState.usernameError = action.errorData["username"];
      }
      if (action.errorData.hasOwnProperty("email")) {
        errorState.usernameError = action.errorData["email"];
      }
      if (action.errorData.hasOwnProperty("password")) {
        errorState.usernameError = action.errorData["password"];
      }
      if (action.errorData.hasOwnProperty("re_password")) {
        errorState.usernameError = action.errorData["re_password"];
      }
      return errorState;
    case CREATE_USER_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default signupReducer;
