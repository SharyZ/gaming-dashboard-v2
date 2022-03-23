import { Route, Switch } from "react-router-dom";

import { Home, Login, Notfound, Signup } from "./pages";
import Root from "./Root";

function App() {
  return (
    <Root>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={Notfound} />
      </Switch>
    </Root>
  );
}

export default App;