import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Games, GamesDetail, Home, Login, Notfound, Signup } from "./pages";
import Root from "./Root";

import RequireAuth from "./utils/RequireAuth";

function App() {
  return (
    <Root>
      <ToastContainer hideProgressBar={true} newestOnTop={true} />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route
          exact
          path="/home"
          component={() => (
            <RequireAuth>
              <Home />
            </RequireAuth>
          )}
        />
        <Route
          exact
          path="/games"
          component={() => (
            <RequireAuth>
              <Games />
            </RequireAuth>
          )}
        />
        <Route
          exact
          path="/games/:gameId"
          component={() => (
            <RequireAuth>
              <GamesDetail />
            </RequireAuth>
          )}
        />
        <Route path="*" component={Notfound} />
      </Switch>
    </Root>
  );
}

export default App;
