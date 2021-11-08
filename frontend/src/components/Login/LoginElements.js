import styled from "styled-components";

//Takes up the whole page and serves as the background
export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9f9f9;
    margin: 0;
    font-family: Helvetica;
`
//Wraps logo, textboxes, and button
export const FormWrapper = styled.div`
    width: 750px;
    height: 570px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    
`
//Container for the input
export const TextBox = styled.div`
    width: 600px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`

export const Input = styled.input`
    width: 580px;
    height: 52px;
    border: #707070 solid 1px;
    color: #242424;
    font-size: 20px;
    margin: 10px;
    padding-left: 25px;
`

export const SignInBtn = styled.button`
    width: 580px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #357bb8;
    border: #707070 solid 1px;
    color: #ffffff;
    margin: 10px;
    font-size: 20px;
    font-weight: bold;
`