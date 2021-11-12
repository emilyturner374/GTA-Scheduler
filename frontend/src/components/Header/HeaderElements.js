import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 35px;
    padding-right: 35px;
    background-color: #f0f0f0;
    height: 40px;
    border: #707070 solid 1px;
    font-family: Helvetica;
    margin: 0;
`
export const InfoWrapper = styled.div`
    display: flex;
    height: 54px;
    width: 165px;
    align-items: center;
    justify-content: space-between;
    justify-self: right;
`

export const StudentInfo = styled.div`
    display: flex;
    color: #242424;
    font-size: 15px;
`
export const Logout = styled(LinkR)`
    height: 40px;
    width: 79px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #357bb8;
    text-decoration: none;
    font-size: 15px;
    font-weight: bold;
`

export const LogoWrap = styled.div`
    height: 40px;
    width: 45px;
    //border: #707070 solid 1px;
    display: flex;
    align-items: center;
`
export const GtaLogoWrap = styled(LogoWrap)` 
    width: 55px;
`