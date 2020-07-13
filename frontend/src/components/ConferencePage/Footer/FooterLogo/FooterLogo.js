import React from "react";
import "./FooterLogo.css"
import ato from "../../../../assets/avia_images/ato.png";
import embr from "../../../../assets/avia_images/embr.png";
import rosneft1 from "../../../../assets/avia_images/rosneft.png";
import atoru from "../../../../assets/avia_images/atoru.png";
import ruinsaider from "../../../../assets/avia_images/ruinsaider.png";
import aviaport from "../../../../assets/avia_images/aviaport.png";
import tp from "../../../../assets/avia_images/tp.png";
import maa from "../../../../assets/avia_images/maa.png";
import aviagor from "../../../../assets/avia_images/aviagor.png";
import tkp from "../../../../assets/avia_images/tkp.png";
import siren from "../../../../assets/avia_images/siren.png";
import biletix from "../../../../assets/avia_images/biletix.png";
import bbtr from "../../../../assets/avia_images/bbtr.png";
class FooterLogo extends React.Component{
    render(){
        return(
            <div className={"footer_logo"}>
                <div>
                    <p>организатор</p>
                    <p>спонсор</p>
                    <p>спонсор</p>
                    <p id={"last"}>генеральный инфопартнер</p>
                </div>
                <div>
                    <img src={ato} alt={"img"}/>
                    <img src={embr} alt={"img"}/>
                    <img src={rosneft1} alt={"img"}/>
                    <img className={"last"} src={atoru} alt={"img"}/>
                    <img className={"last"} src={ruinsaider} alt={"img"}/>
                </div>
                <div>
                    <p>Информационный партнер</p>
                </div>
                <div className={"test"}>
                    <img src={aviaport} alt={"img"}/>
                    <img src={tp} alt={"img"}/>
                    <img src={maa} alt={"img"}/>
                    <img src={aviagor} alt={"img"}/>
                </div>
                <div className={"bottom_rows_logo"}>
                    <img src={tkp} alt={"img"}/>
                    <img src={siren} alt={"img"}/>
                    <img src={biletix} alt={"img"}/>
                    <img src={bbtr} alt={"img"}/>
                </div>
            </div>
        );
    }
}
export default FooterLogo;