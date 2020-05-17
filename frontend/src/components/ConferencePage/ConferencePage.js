import React, {Component} from "react";
import ConferenceProgram from "./ConferenceProgram/ConferenceProgram";
import Broadcast from "./Broadcast/Broadcast";
import Chat from "./Chat/Chat";
import Poll from "./Poll/Poll";
import Logo from "../Logo/Logo";

export default class ConferencePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            conference: {
                url: "https://www.youtube.com/embed/qMsKlfkePD0",
                poll: {
                    question: "are you have Шиза?"
                }
            }
        }
    }

    render() {
        return (
            <div>
                <div>
                    <ConferenceProgram/>
                </div>
                <div>
                    <Broadcast url={this.state.conference.url}/>
                    <Chat/>
                </div>
                <div>
                    <Poll poll={this.state.conference.poll}/>
                </div>
                <div><Logo/></div>
            </div>
        );
    }
}
