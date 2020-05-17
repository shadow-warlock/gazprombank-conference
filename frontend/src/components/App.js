import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Security from "./Security/Security";
import {ROLE} from "../const/const";
import ConferencePage from "./ConferencePage/ConferencePage";
import "./App.css";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Security roles={[ROLE.USER, ROLE.ADMIN]}>
                    <Route exact path="/">
                        <ConferencePage/>
                    </Route>
                </Security>
                <Security roles={[ROLE.ADMIN]}>
                    <Route exact path="/admin">
                        {"jopa admin"}
                    </Route>
                </Security>
            </Switch>
        </BrowserRouter>
    );
}
