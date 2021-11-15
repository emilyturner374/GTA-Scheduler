import styled from "styled-components";

export const BgContainer = styled.form`
    width: 100%;
    height: 100%;
    background: #f9f9f9;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
`
export const BtnWrap = styled.div` 
    width: 1200px;
    height: 50px;
    background: none;
    //border: #707070 solid 1px;
    display: flex;
    align-items: center;
    justify-content: right;
    margin-bottom: 100px;
`

export const SaveBtn = styled.button` 
    width: 170px;
    height: 45px;
    background: #357bb8;
    border: #707070 solid 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-family: Helvetica;
    font-size: 18px;
    &:hover{
        background: #468cc9;
    }
`