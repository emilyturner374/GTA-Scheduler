import styled from "styled-components";

//Add media queries
export const Container = styled.div`
    height: 50px;
    background: #f0f0f0;
    border: #707070 solid 1px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    font-family: Helvetica;
    padding-left: 35px;
    padding-right: 35px;
`
export const ToolWrap = styled.div`
    width: 75px;
    height: 30px;
    //border: #707070 solid 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #3c3c3c;
`
export const SearchWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ffffff;
    border: #707070 solid 1px;
    color: #3c3c3c;
    padding-left: 8px;

`
export const SearchBox = styled.input`
    height: 20px;
    padding-left: 6px;
    border: none;
    background: transparent;
    flex: 1;
    color: #242424;
    font-size: 12px;
    &:focus {
        outline: none;
    }
`
