import styled from 'styled-components';

export const CourseInfoWrap = styled.div`
    width: 900px;
    height: 40px;
    //border: #707070 solid 1px;
    display: flex;
    align-items: center;
    justify-content: left;
    flex-direction: row;
    margin: 10px 10px 5px 0px;
    font-family: Helvetica;
    font-size: 15px;
    color: #242424;
`
export const InputBox = styled.input`
    width: 200px;
    height: 35px;
    border: #707070 solid 1px;
    display: flex;
    align-items: left;
    padding-left: 10px;
    margin: 10px;
    font-family: Helvetica;
    color: #242424;
    &:focus {
        outline: none;
    }
`

export const TimeWrap = styled.div` 
    width: 260px;
    height: 35px;
    //border: #707070 solid 1px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 10px;
    font-family: Helvetica;
    color: #242424;
    margin-left: 30px;
    margin-right: 30px;
`
export const TimeBox = styled.div` 
    width: 98px;
    height: 35px;
    border: #707070 solid 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    font-family: Helvetica;
    color: #242424;
`
export const TimeInput = styled(InputBox)` 
    width: 35px;
    height: 20px;
    border: none;
    padding: none;
    margin: 0;
`
export const AmPmSelect = styled.select` 
    width: 50px;
    height: 35px;
    border-left: #707070 solid 1px;
    border-right: none;
    border-top: none;
    border-bottom: none;
    display: flex;
    align-items: left;
    padding-left: 5px;
    margin: 10px;
    font-family: Helvetica;
    color: #242424;

    option {
        color: #242424;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }

    &:hover {
        text-decoration: underline;
    }
`
export const DaysWrap = styled.div` 
    width: 250px;
    height: 35px;
    //border: #707070 solid 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
    margin-right: 30px;
    font-family: Helvetica;
    color: #242424;
`
export const DayBtn = styled.button` 
    width: 50px;
    height: 35px;
    background: ${props => props.selected ? "#ffffff" : "#357bb8"};
    border: #707070 solid 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Helvetica;
    color: ${props => props.selected ? "#242424" : "#ffffff"};
    
    &:hover {
        background: #357bb8;
        color: #ffffff;
    }
`
export const DeleteCourseBtn = styled.button` 
    width: 25px;
    height: 25px;
    background: none;
    border: none;
    align-items: center;
    justify-content: center;
    &:hover {
        text-decoration: underline;
        border: #357bb8 solid 1px;
    }
`