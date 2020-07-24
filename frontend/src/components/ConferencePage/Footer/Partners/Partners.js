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
// import ato from "../../../../assets/avia_images/ato.png";
// import embr from "../../../../assets/avia_images/embr.png";
// import rosneft1 from "../../../../assets/avia_images/rosneft.png";
// import atoru from "../../../../assets/avia_images/atoru.png";
// import ruinsaider from "../../../../assets/avia_images/ruinsaider.png";
// import aviaport from "../../../../assets/avia_images/aviaport.png";
// import tp from "../../../../assets/avia_images/tp.png";
// import maa from "../../../../assets/avia_images/maa.png";
// import aviagor from "../../../../assets/avia_images/aviagor.png";
// import tkp from "../../../../assets/avia_images/tkp.png";
// import siren from "../../../../assets/avia_images/siren.png";
// import biletix from "../../../../assets/avia_images/biletix.png";
// import bbtr from "../../../../assets/avia_images/bbtr.png";

class Partners extends React.Component {
    render() {
        return (
            <div className={"footer_logo"}>
                {/*<div>*/}
                {/*    <p>организатор</p>*/}
                {/*    <p>спонсор</p>*/}
                {/*    <p>спонсор</p>*/}
                {/*    <p id={"last"}>генеральный инфопартнер</p>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <img src={ato} alt={"img"}/>*/}
                {/*    <img src={embr} alt={"img"}/>*/}
                {/*    <img src={rosneft1} alt={"img"}/>*/}
                {/*    <img className={"last"} src={atoru} alt={"img"}/>*/}
                {/*    <img className={"last"} src={ruinsaider} alt={"img"}/>*/}
                {/*</div>*/}
                {/*<div>*/}
                <div>
                    <p>Информационные партнеры</p>
                </div>
                <div className={"bottom_rows_logo"}>
                    <img src={trucks_on_the_road} alt={"img"}/>
                    <img src={ati_su} alt={"img"}/>
                    <img src={auto_review} alt={"img"}/>
                    <img src={brother} alt={"img"}/>
                    <img src={RAMR} alt={"img"}/>
                </div>
                <div className={"bottom_rows_logo"}>
                    <img src={business_navigator} alt={"img"}/>
                    <img src={LogiRus} alt={"img"}/>
                    <img src={colesaru} alt={"img"}/>
                    <img src={logistics} alt={"img"}/>
                    <img src={fifth_wheel} alt={"img"}/>
                </div>
                <div className={"bottom_rows_logo"}>
                    <img src={flight} alt={"img"}/>
                </div>
            </div>
        );
    }
}

export default Partners;