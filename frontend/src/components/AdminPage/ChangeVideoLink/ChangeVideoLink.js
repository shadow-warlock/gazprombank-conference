import React, {Component} from "react";
import axios from "axios";
import {API, AXIOS_CONFIG} from "../../../const/const";
import Input from "../../Input/Input";
import Button from "../../Button/Button";

export default class ChangeVideoLink extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: null
        };
    }

    componentDidMount() {
        this.loadLink();
    }

    loadLink() {
        let self = this;
        axios.get(API.CONFERENCE, AXIOS_CONFIG).then(
            res => {
                self.setState({
                    url: res.data.url
                });
            }
        ).catch(e => {
            console.error(e);
        });
    }

    render() {
        return (
            <div>
                <p className={"uppercase font_size_big pb_20"}>Смена ссылки</p>
                <Input value={this.state.url} onChange={(e) => {
                    this.setState({url: e.target.value});
                }}/>
                <br/>
                <br/>
                <Button
                    onClick={()=>{
                        console.log({url: this.state.url});
                        axios.post(API.CONFERENCE_URL, {url: this.state.url}, AXIOS_CONFIG).then(
                            res => {
                                alert("Ссылка на конференцию успешно изменена");
                            }
                        ).catch(e => {
                            console.error(e);
                        });
                    }}>
                    Изменить
                </Button>
            </div>
        );
    }
}