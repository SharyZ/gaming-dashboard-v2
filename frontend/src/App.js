import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home, Login, Notfound, Signup } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;
