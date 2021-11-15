import styled from 'styled-components';

export const NumWrap = styled.div` 
    width: 1000px;
    //Height will be adjustable
    height: auto;
    //border: #707070 solid 1px;
    display: flex;
    align-items: left;
    justify-content: top;
    flex-direction: row;
    font-family: Helvetica;
    font-size: 20px;
    margin-bottom: 20px;
    counter-increment: css-counter 1;
    &:before{
        content: counter(css-counter) ". ";
        margin-top: 20px;
    }
`
export const StudentInfo = styled.div`
    width: 900px;
    //Height will be adjustable
    height: auto;
    //border: #707070 solid 1px;
    display: flex;
    align-items: left;
    justify-content: top;
    flex-direction: column;
    font-family: Helvetica;
    font-size: 20px;
    margin-bottom: 20px;
`
export const NameWrap = styled.div`
    width: 565px;
    height: 40px;
    //border: #707070 solid 1px;
    display: flex;
    align-items: center;
    justify-content: left;
    flex-direction: row;
    margin: 10px 10px 10px 0px;
`
export const InputBox = styled.input`
    width: 200px;
    height: 35px;
    border: #707070 solid 1px;
    display: flex;
    align-items: left;
    padding-left: 10px;
    margin-left: 10px;
    margin-right: 60px;
    font-family: Helvetica;
    color: #242424;
    &:focus {
        outline: none;
    }
`
export const MnumInput = styled(InputBox)` 
    margin-right: 10px;
    margin-left: 0px;
`
export const AddCourseBtn = styled.button` 
    width: 90px;
    height: 30px;
    background: none;
    border: none;
    //border: #707070 solid 1px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
    font-family: Helvetica;
    font-size: 12px;
    color: #357bb8;
    
    &:hover {
        text-decoration: underline;
    }
`
export const DeleteStudentBtn = styled(AddCourseBtn)` 
    width: 25px;
    height: 25px;
    justify-content: center;
    padding: 0px;
    &:hover {
        text-decoration: underline;
        border: #357bb8 solid 1px;
    }
`