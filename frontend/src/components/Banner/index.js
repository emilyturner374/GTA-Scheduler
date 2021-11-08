/*
*   Logout banner 
*/

import React from 'react';
import {ReactComponent as MtsuLogoIcon} from '../../icons/large-mtsu-icon.svg';
import { BannerBg, BannerContainer} from './BannerElements';

const Banner = () => {
    return(
        <BannerBg>
            <BannerContainer>
                <MtsuLogoIcon/>
            </BannerContainer>
        </BannerBg>
    );
};

export default Banner;