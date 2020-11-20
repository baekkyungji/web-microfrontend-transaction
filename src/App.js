import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Event from "./Event";

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path="/event" component={Event} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
