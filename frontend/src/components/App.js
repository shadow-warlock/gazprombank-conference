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
                <Security role={ROLE.USER}>
                    <Route exact path="/">
                        <ConferencePage/>
                    </Route>
                </Security>
                <Security role={ROLE.ADMIN}>
                    <Route exact path="/admin">
                        {"jopa admin"}
                    </Route>
                </Security>
            </Switch>
        </BrowserRouter>
    );
}
