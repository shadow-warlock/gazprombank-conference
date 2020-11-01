import React from 'react';
import './Partners.css';
import ato from '../../../../assets/avia_images/ato.png';
import embr from '../../../../assets/avia_images/embr.png';
import rosneft1 from '../../../../assets/avia_images/rosneft.png';
import atoru from '../../../../assets/avia_images/atoru.png';
import ruinsaider from '../../../../assets/avia_images/ruinsaider.png';
import aviaport from '../../../../assets/avia_images/aviaport.png';
import tp from '../../../../assets/avia_images/tp.png';
import maa from '../../../../assets/avia_images/maa.png';
import aviagor from '../../../../assets/avia_images/aviagor.png';
import tkp from '../../../../assets/avia_images/tkp.png';
import siren from '../../../../assets/avia_images/siren.png';
import biletix from '../../../../assets/avia_images/biletix.png';
import bbtr from '../../../../assets/avia_images/bbtr.png';
import { FormattedMessage } from 'react-intl';

class Partners extends React.Component {
    render() {
        return (
            <div className={'partners uppercase'}>
                <div>
                    <div className={'top_partners'}>
                        <div className={'partner_container'}>
                            <p>
                                <FormattedMessage id={'partner_organizer'} />
                            </p>
                            <img src={ato} alt={'img'} />
                        </div>
                        <div className={'partner_container'}>
                            <p>
                                <FormattedMessage id={'partner_sponsor'} />
                            </p>
                            <img src={embr} alt={'img'} />
                        </div>
                        <div className={'partner_container'}>
                            <p>
                                <FormattedMessage id={'partner'} />
                            </p>
                            <img src={rosneft1} alt={'img'} />
                        </div>
                    </div>
                    <div>
                        <div className={'general_info_partner'}>
                            <p>
                                <FormattedMessage
                                    id={'general_media_partner'}
                                />
                            </p>
                            <div>
                                <img src={atoru} alt={'img'} />
                                <img src={ruinsaider} alt={'img'} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'information_partners'}>
                    <div>
                        <p>
                            <FormattedMessage id={'media_partners'} />
                        </p>
                    </div>
                    <div>
                        <div>
                            <img src={aviaport} alt={'img'} />
                        </div>
                        <div>
                            <img src={tp} alt={'img'} />
                        </div>
                        <div>
                            <img src={maa} alt={'img'} />
                        </div>
                        <div>
                            <img src={aviagor} alt={'img'} />
                        </div>
                        <div>
                            <img src={tkp} alt={'img'} />
                        </div>
                        <div>
                            <img src={siren} alt={'img'} />
                        </div>
                        <div>
                            <img src={biletix} alt={'img'} />
                        </div>
                        <div>
                            <img src={bbtr} alt={'img'} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Partners;
