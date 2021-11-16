//{ useState } from 'react';
import { BsXCircle } from 'react-icons/bs';
import  { CourseInfoWrap,
        InputBox,
        TimeWrap,
        TimeBox,
        TimeInput,
        AmPmSelect,
        DaysWrap,
        DayBtn,
        DeleteCourseBtn }
        from './CourseElements';
       
export default function Course(
            {courseId, 
            courseName,
            days,
            startTime,
            startAmPm,
            endTime,
            endAmPm,
            changeCourseName,
            changeDays,
            changeStart,
            changeStartAmPm,
            changeEnd,
            changeEndAmPm,
            deleteCourse}
        ){    
        return(
            <CourseInfoWrap>
                <InputBox 
                    placeholder="Course name"
                    value={courseName}
                    onChange = { e => changeCourseName(e.target.value, courseId)}
                />
                <DaysWrap>
                    <DayBtn 
                        value="Monday" 
                        type="button"
                    >
                            Mon
                    </DayBtn>
                    <DayBtn 
                        value="Tuesday" 
                        type="button"
                    >
                        Tue
                    </DayBtn>
                    <DayBtn 
                        value="Wednesday" 
                        type="button"
                    >
                        Wed
                    </DayBtn>
                    <DayBtn 
                        value="Thursday" 
                        type="button"
                    >
                        Thu
                    </DayBtn>
                    <DayBtn 
                        value="Friday" 
                        type="button"
                    >
                        Fri
                    </DayBtn>
                </DaysWrap>
                <TimeWrap>
                    <TimeBox>
                        <TimeInput 
                            placeholder="10:00"
                            value={startTime}
                            onChange = { e => changeStart(e.target.value, courseId)}
                        />
                        <AmPmSelect
                            onChange = { e => changeStartAmPm(e.target.value, courseId)}
                        >
                            <option value="am">am</option>
                            <option value="pm">pm</option>
                        </AmPmSelect>
                    </TimeBox>
                    to
                    <TimeBox>
                        <TimeInput 
                            placeholder="10:30"
                            value={endTime}
                            onChange = { e => changeEnd(e.target.value, courseId)}
                        />
                        <AmPmSelect
                            onChange = { e => changeEndAmPm(e.target.value, courseId)}
                        >
                            <option value="am">am</option>
                            <option value="pm">pm</option>
                        </AmPmSelect>
                    </TimeBox>
                </TimeWrap>
                <DeleteCourseBtn
                    type = "button"
                    onClick = {() => deleteCourse(courseId)}
                >
                    <BsXCircle color="#357bb8" min-height="30px" min-width="30px"/>
                </DeleteCourseBtn>
            </CourseInfoWrap>
        );
}