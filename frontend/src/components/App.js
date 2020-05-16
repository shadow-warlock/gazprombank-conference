import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Security from "./Security/Security";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Security role={"ROLE_USER"}>
                <Route exact path="/">
                    {"jopa"}
                </Route>
            </Security>
            <Security role={"ROLE_ADMIN"}>
                <Route exact path="/admin">
                    {"jopa admin"}
                </Route>
            </Security>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
