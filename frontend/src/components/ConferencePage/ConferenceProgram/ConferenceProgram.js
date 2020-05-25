import React, {Component} from "react";
import ConferenceItem from "./ConferenceItem/ConferenceItem";
import "./ConferenceProgram.css";

export default class ConferenceProgram extends Component {
    render() {
        return (
            <div className={"conference_program"}>
                <div className={"conference_program_title"}>
                    <div>
                        <p className={"color_white_blue font_size_very_big uppercase bold"}>Программа</p>
                        <p className={"color_white font_size_very_big uppercase bold"}>семинара</p>
                    </div>
                    <div>
                        <p className={"color_white font_size_very_big uppercase bold"}>Демонстрация возможностей <br/>сервиса
                            Банка «Интерактивная отчетность»</p>
                        <p className={"color_white bold"}>Обучающий семинар по работе с сервисом Банка ГПБ (АО)</p>
                        <br/>
                        <p className={"color_white_blue font_size_big uppercase bold"}>28 мая 2020 года 14:00</p>
                    </div>
                </div>
                <div>
                    {this.props.items.map((item) => <ConferenceItem item={item} key={item.id}/>)}
                </div>
            </div>
        );
    }
}
