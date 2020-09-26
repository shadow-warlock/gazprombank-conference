import React, {Component} from "react";
import axios from "axios";
import Button from "../../Button/Button";
import {API, AXIOS_CONFIG} from "../../../const/const";

export default class AdminPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            log: ""
        }
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.log}
                </div>
                <Button onClick={()=>{
                    let self = this;
                  axios.get(API.WS_SERVER_START, AXIOS_CONFIG).then(
                      res => {
                          self.setState({
                              log: res.data
                          });
                      }
                  ).catch(e => {
                      console.error(e);
                  });
                }}>
                  Запустить
                </Button>
                <Button onClick={()=>{
                    let self = this;
                    axios.get(API.WS_SERVER_STOP, AXIOS_CONFIG).then(
                        res => {
                            self.setState({
                                log: res.data
                            });
                        }
                    ).catch(e => {
                        console.error(e);
                    });
                }}>
                    Остановить
                </Button>
                <Button onClick={()=>{
                    let self = this;
                    axios.get(API.WS_SERVER_STATUS, AXIOS_CONFIG).then(
                        res => {
                            self.setState({
                                log: res.data
                            });
                        }
                    ).catch(e => {
                        console.error(e);
                    });
                }}>
                    Статус
                </Button>
            </div>
        );
    }
}
