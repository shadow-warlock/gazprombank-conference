import React, {Component} from "react";
import {injectIntl} from "react-intl";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Security from "../Security/Security";
import {ROLE} from "../../const/const";
import ConferencePage from "../ConferencePage/ConferencePage";
import "./../App.css";
import AdminPage from "../AdminPage/AdminPage";
import "./../mobile.css";
import RoomPage from "../RoomPage/RoomPage";
import Rotation from "react-rotation";

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
                    <Route exact path="/room/:id" render={(props)=>{
                        return (<Security roles={[ROLE.USER, ROLE.ADMIN]}>
                            {user => <RoomPage room={props.match.params.id} user={user}/>}
                        </Security>)
                    }}/>
                    <Route exact path="/admin">
                        <Security roles={[ROLE.ADMIN]}>
                            {user => <AdminPage/>}
                        </Security>
                    </Route>
                    <Route exact path={"/test"}>
                        <Rotation autoPlay={2000} cycle={true}>
                            <img className={'frame'} src='/assets/speakers/grishin.jpg' />
                            <img className={'frame'} src='/assets/speakers/kamishev.jpg' />
                            <img className={'frame'} src='/assets/speakers/lopatnikova.jpg' />
                            <img className={'frame'} src='/assets/speakers/melnikov.jpg' />
                        </Rotation>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default injectIntl(Router)