import React, {Component} from "react";
import "./Footer.css";
import TechSupport from "../../TechSupport/TechSupport";

export default class Footer extends Component {

    render() {
        return (
            <div className={"footer"}>
                <div className={"padding_side"}>
                    <TechSupport/>
                    <div>
                        <p>Организатор: ATO Events</p>
                        <p>Более 340 мероприятий, 41200+ делегатов, 23 года на рынке</p>
                    </div>
                </div>
                <div className={"bottom_footer color_white bold"}>
                    <div>
                        © 2020, <span className={"color_green_blue"}>ATO Events</span>
                    </div>
                    <div>
                        <a>Facebook</a>
                        <a>Youtube</a>
                        <a>Политика обработки персональных данных</a>
                        <a>Политика конфиденциальности</a>
                    </div>
                    <div></div>
                </div>
            </div>
        );
    }
}
