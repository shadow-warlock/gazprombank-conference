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
import {FormattedMessage} from "react-intl";


class Partners extends React.Component {
    render() {
        return (
            <div className={"footer_logo padding_side"}>
                <div className={"text_center color_blue font_size_very_big"}>
                    <p><FormattedMessage id={"information_partners"}/></p>
                </div>
                <div className={"logos"}>
                    <img className={"partner_logo"} src={trucks_on_the_road} alt={"partner logo"}/>
                    <img className={"partner_logo"} src={ati_su} alt={"partner logo"}/>
                    <img className={"partner_logo"} src={auto_review} alt={"partner logo"}/>
                    <img className={"partner_logo"} src={brother} alt={"partner logo"}/>
                    <img className={"partner_logo"} src={RAMR} alt={"partner logo"}/>
                    <img className={"partner_logo"} src={business_navigator} alt={"partner logo"}/>
                    <img className={"partner_logo"} src={LogiRus} alt={"partner logo"}/>
                    <img className={"partner_logo"} src={colesaru} alt={"partner logo"}/>
                    <img className={"partner_logo"} src={logistics} alt={"partner logo"}/>
                    <img className={"partner_logo"} src={fifth_wheel} alt={"partner logo"}/>
                    <img className={"partner_logo"} src={flight} alt={"partner logo"}/>
                </div>
            </div>
        );
    }
}

export default Partners;