import React, {Component} from "react";
import Message from "./Message/Message";

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {
                    text: "Тестовый мсг",
                    user: {
                        name: "Петуч",
                        surname: "Жижбович"
                    }
                },
                {
                    text: "Тестовый мсг",
                    user: {
                        name: "Петуч",
                        surname: "Жижбович"
                    }
                },
                {
                    text: "Тестовый мсг",
                    user: {
                        name: "Петуч",
                        surname: "Жижбович"
                    }
                },
                {
                    text: "Тестовый мсг",
                    user: {
                        name: "Петуч",
                        surname: "Жижбович"
                    }
                },
            ]
        }
    }

    render() {
        return (
            <div>{this.state.messages.map((message) => <Message message={message}/>)}</div>
        );
    }
}
