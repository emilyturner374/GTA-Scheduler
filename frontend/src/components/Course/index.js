//{ useState } from 'react';
import { BsXCircle } from 'react-icons/bs';
import  { CourseInfoWrap,
        InputBox,
        TimeWrap,
        TimeBox,
        TimeInput,
        AmPmSelect,
        DaysWrap,
        DayBtn }
        from './CourseElements';
       
export default function Course({id, courseName, days, startTime, endTime}) {
    

    return(
        <CourseInfoWrap>
            <InputBox placeholder="Course name"/>
            <DaysWrap>
                <DayBtn>Mon</DayBtn>
                <DayBtn>Tue</DayBtn>
                <DayBtn>Wed</DayBtn>
                <DayBtn>Thu</DayBtn>
                <DayBtn>Fri</DayBtn>
            </DaysWrap>
            <TimeWrap>
                <TimeBox>
                    <TimeInput placeholder="10:00"/>
                    <AmPmSelect>
                        <option value="am">am</option>
                        <option value="pm">pm</option>
                    </AmPmSelect>
                </TimeBox>
                to
                <TimeBox>
                    <TimeInput placeholder="10:30"/>
                    <AmPmSelect>
                        <option value="am">am</option>
                        <option value="pm">pm</option>
                    </AmPmSelect>
                </TimeBox>
            </TimeWrap>

            <BsXCircle color="#357bb8" min-height="30px" min-width="30px"/>
        </CourseInfoWrap>
    );
}