import styled from "styled-components";

/*Size of StudentContainer will have to change 
* dynamically as students and courses are added
*/
export const LabContainer = styled.div`
    width: 1200px;
    height: auto;
    background: #ffffff;
    border: #707070 solid 1px;
    margin-top: 50px;
    margin-bottom: 30px;
    box-shadow: 5px 5px 5px #d9d9d9;
`

export const LabHeader = styled.div`
    width: 1200px;
    height: 50px;
    background: #f0f0f0;
    border-bottom: #707070 solid 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Helvetica;
    font-size: 20px;
    color: #242424;
`

export const ContentWrap = styled.div`
    width: 1200px;
    height: auto;
    //border: #707070 solid 1px;
    display: flex;
    align-items: center;
    justify-content: top;
    flex-direction: column;
    font-family: Helvetica;
    font-size: 20px;
    padding: 40px;
    counter-reset: css-counter 0;
`


export const AddLabBtn = styled.button` 
    width: 150px;
    height: 40px;
    background: #f0f0f0;
    border: #707070 solid 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Helvetica;
    color: #242424;
    margin-top: 40px;
    margin-bottom: 50px;
    &:hover {
        background: #e0e0e0;
    }
`