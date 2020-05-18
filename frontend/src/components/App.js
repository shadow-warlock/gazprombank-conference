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
                    <Route exact path="/">
                        <Security roles={[ROLE.USER, ROLE.ADMIN]}>
                            {user => <ConferencePage user={user}/>}
                        </Security>
                    </Route>
                    <Route exact path="/admin">
                        <Security roles={[ROLE.ADMIN]}>
                            {user => "jopa"}
                        </Security>
                    </Route>
            </Switch>
        </BrowserRouter>
    );
}
