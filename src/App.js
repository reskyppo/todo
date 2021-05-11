import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/v1" />
          </Route>
          <Route path="/v1" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
