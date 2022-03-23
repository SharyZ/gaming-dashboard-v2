export const SET_TOKEN = "SET_TOKEN";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const UNSET_CURRENT_USER = "UNSET_CURRENT_USER";

const initialState = {
  isAuthenticated: false,
  user: {},
  token: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UNSET_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
};

export default loginReducer;
