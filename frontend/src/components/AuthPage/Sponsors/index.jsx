import React, {Component, Fragment} from 'react';
import ChangeLocaleButton from "../../ChangeLocaleButton/ChangeLocaleButton";
import "./Sponsors.css";
import {LanguageContext} from "../../App";
import {PARTNERS} from "../../../const/mockData";

class Sponsors extends Component {
    render() {
        return (
            <div className={"sponsors"}>
                <div className={"logos"}>
                    <LanguageContext.Consumer>{
                        value =>
                            <Fragment>
                                {PARTNERS.map((sponsor)=>{
                                    return <div><a href={"#"}><img src={sponsor.logo[value.lang]} alt={sponsor.id}/></a></div>;
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