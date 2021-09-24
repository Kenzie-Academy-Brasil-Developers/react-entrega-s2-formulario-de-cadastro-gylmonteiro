import "./App.css";
import { Switch, Route } from "react-router-dom";
import Form from "./components/Form";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/home">
            <Welcome></Welcome>
          </Route>
          <Route path="/">
            <Form></Form>
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
