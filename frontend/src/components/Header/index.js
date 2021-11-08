import React from 'react';
import { ReactComponent as Bar} from '../../icons/separation-bar.svg'
import { ReactComponent as SmallMtsuLogo } from '../../icons/small-mtsu-icon.svg';
import { HeaderContainer, InfoWrapper, StudentInfo, Logout, LogoWrap} from './HeaderElements';
import { BsBoxArrowRight } from "react-icons/bs";

const Header = () => {
    return (
        <HeaderContainer>
            <LogoWrap>
                <SmallMtsuLogo/>
            </LogoWrap>
            <InfoWrapper>
                <StudentInfo>
                    Admin
                </StudentInfo>
                    <Bar/>
                <Logout to='/'>
                    <BsBoxArrowRight size="20px"/>
                    Log out
                </Logout>
            </InfoWrapper>
        </HeaderContainer>

    );
};

export default Header;
