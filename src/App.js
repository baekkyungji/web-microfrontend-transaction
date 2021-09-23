import React, { PureComponent } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Transaction from "./Transaction";

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path="/transaction" component={Transaction} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
