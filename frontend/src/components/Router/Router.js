import React, {Component} from "react";
import {injectIntl} from "react-intl";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Security from "../Security/Security";
import {ROLE} from "../../const/const";
import ConferencePage from "../ConferencePage/ConferencePage";
import AdminPage from "../AdminPage/AdminPage";

class Router extends Component{


    render(){
        document.title = this.props.intl.formatMessage({id:"page_title"})
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
                            {user => <AdminPage/>}
                        </Security>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default injectIntl(Router)