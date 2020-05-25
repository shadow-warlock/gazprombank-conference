import React, {Component} from "react";
import Button from "../../Button/Button";
import {API} from "../../../const/const";

export default class LoaderCSV extends Component {


    loadCSV(url) {
        window.open(url, "_blank");
    }

    render() {
        return (
            <>
                <br/>
                <p className={"uppercase color_white font_size_big pb_20"}>Выгрузка в CSV</p>
                <div className={"csv_buttons"}>
                    <Button onClick={() => {
                        this.loadCSV.bind(this)(API.CONFERENCE_POLL_CSV)
                    }}>
                        Опрос
                    </Button>
                    <Button onClick={() => {
                        this.loadCSV.bind(this)(API.CHAT_MESSAGE_CSV)
                    }}>
                        Чат
                    </Button>
                    <Button onClick={() => {
                        this.loadCSV.bind(this)(API.USER_CODE_CSV)
                    }}>
                        Коды пользователей
                    </Button>
                </div>
            </>
        );
    }
}
