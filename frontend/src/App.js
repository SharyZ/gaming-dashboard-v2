import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { Home, Login, Notfound, Signup } from "./pages";
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
          path="/"
          component={() => (
            <RequireAuth>
              <Home />
            </RequireAuth>
          )}
        />
        <Route path="*" component={Notfound} />
      </Switch>
    </Root>
  );
}

export default App;
