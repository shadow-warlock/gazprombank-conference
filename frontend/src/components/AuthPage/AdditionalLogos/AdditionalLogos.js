import React, { Component } from 'react';
import embraerLogo from './../../../assets/avia_images/embr_en.png';
import rosneftLogoRu from './../../../assets/avia_images/rosneft_logo_ru.png';
import rosneftLogoEn from './../../../assets/avia_images/rosneft_logo_en.png';
import { LanguageContext } from '../../App';
import './AdditionalLogos.css';

class AdditionalLogos extends Component {
    render() {
        return (
            <div className={'additional_logos'}>
                <img src={embraerLogo} alt={'embraer'} />
                <LanguageContext.Consumer>
                    {(value) => (
                        <img
                            src={
                                value.lang === 'en'
                                    ? rosneftLogoEn
                                    : rosneftLogoRu
                            }
                            alt={'rosneft'}
                        />
                    )}
                </LanguageContext.Consumer>
            </div>
        );
    }
}

export default AdditionalLogos;
