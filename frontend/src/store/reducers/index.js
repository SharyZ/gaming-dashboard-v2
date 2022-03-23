import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import signupReducer from "./signup";
import loginReducer from "./login";
import { gamesReducer } from "./game";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    signup: signupReducer,
    login: loginReducer,
    games: gamesReducer,
  });

export default rootReducer;
