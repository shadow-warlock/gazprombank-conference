import React, {Component} from "react";
import "./TechSupport.css";

export default class TechSupport extends Component {
    render() {
        return (
            <div className={"tech_support"}>
                <div>
                    <p>Технические вопросы по подключению к трансляции</p>
                    <div className={"login_supporters"}>
                        <p>Денис Лазаренко</p>
                        <p className={"font_size_big"}><a className={"white_link bold"} href={"tel:+7 (926) 149-14-37"}>+7 (926) 149-14-37</a></p>
                    </div>
                </div>
                <div>
                    <p>Вопросы по работе с сервисом «Интерактивная отчетность»</p>
                    <div className={"login_supporters"}>
                        <p>Александр Страйстар</p>
                        <p className={"font_size_big"}><a className={"white_link bold"} href={"tel:+7 (903) 779-34-99"}>+7 (903) 779-34-99</a></p>
                    </div>
                </div>
            </div>
        );
    }
}
