import React, {Component, Fragment} from 'react';
import ChangeLocaleButton from "../../ChangeLocaleButton/ChangeLocaleButton";
import "./Sponsors.css";
import {LanguageContext} from "../../App";
import {SPONSORS} from "../../../const/mockData";

class Sponsors extends Component {
    render() {
        return (
            <div className={"sponsors"}>
                <div className={"logos"}>
                    <LanguageContext.Consumer>{
                        value =>
                            <Fragment>
                                {SPONSORS.map((sponsor)=>{
                                    return <div key={sponsor.id}><a target={'_blank'} href={sponsor.link[value.lang]}><img src={sponsor.logo[value.lang]} alt={sponsor.id}/></a></div>;
                                })}
                            </Fragment>

                    }</LanguageContext.Consumer>


                </div>
                <div><ChangeLocaleButton onWhiteBg={true}/></div>
            </div>
        )
    }
}

export default Sponsors