import React from "react";
import "./Partners.css"
import ati_su from "../../../../assets/cordiant_images/ati_su.png"
import auto_review from "../../../../assets/cordiant_images/auto_review.png"
import brother from "../../../../assets/cordiant_images/brother.png"
import business_navigator from "../../../../assets/cordiant_images/business_navigator.png"
import colesaru from "../../../../assets/cordiant_images/colesaru.png"
import fifth_wheel from "../../../../assets/cordiant_images/fifth_wheel.png"
import flight from "../../../../assets/cordiant_images/flight.png"
import LogiRus from "../../../../assets/cordiant_images/LogiRus.png"
import logistics from "../../../../assets/cordiant_images/logistics.png"
import RAMR from "../../../../assets/cordiant_images/RAMR.png"
import trucks_on_the_road from "../../../../assets/cordiant_images/trucks_on_the_road.png"


class Partners extends React.Component {
    render() {
        return (
            <div className={"footer_logo"}>
                <div>
                    <p>Информационные партнеры</p>
                </div>
                <div className={"bottom_rows_logo"}>
                    <img id={"logo_partners"} src={trucks_on_the_road} alt={"img"}/>
                    <img id={"logo_partners"} src={ati_su} alt={"img"}/>
                    <img id={"logo_partners"} src={auto_review} alt={"img"}/>
                    <img id={"logo_partners"} src={brother} alt={"img"}/>
                    <img id={"logo_partners"} src={RAMR} alt={"img"}/>
                </div>
                <div className={"bottom_rows_logo"}>
                    <img id={"logo_partners"} src={business_navigator} alt={"img"}/>
                    <img id={"logo_partners"} src={LogiRus} alt={"img"}/>
                    <img id={"logo_partners"} src={colesaru} alt={"img"}/>
                    <img id={"logo_partners"} src={logistics} alt={"img"}/>
                    <img id={"logo_partners"} src={fifth_wheel} alt={"img"}/>
                </div>
                <div id={"logo_partners"} className={"bottom_rows_logo"}>
                    <img src={flight} alt={"img"}/>
                </div>
            </div>
        );
    }
}

export default Partners;