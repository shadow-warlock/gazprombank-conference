import React, {Component} from "react";
import "./Footer.css";
import TechSupport from "../../TechSupport/TechSupport";
import LogoutButton from "../../LogoutButton/LogoutButton";

export default class Footer extends Component {

    render() {
        return (
            <div className={"footer"}>
                <div className={"padding_side"}>
                    <TechSupport/>
                    <div className={"organization"}>
                        <p className={"font_size_big color_green_blue bold"}>Организатор: ATO Events</p>
                        <p>Более 340 мероприятий, 41200+ делегатов, 23 года на рынке</p>
                        <p>
                            <a className={"color_green_blue"} href={"://www.events.ato.ru"}>www.events.ato.ru</a> +7 495
                            108-51-43
                        </p>
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
                    <div>
                        <LogoutButton/>
                    </div>
                </div>
            </div>
        );
    }
}
