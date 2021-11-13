import { useState } from 'react';
import { BsXCircle, BsPlusCircle } from 'react-icons/bs';
import  { NumWrap,
        StudentInfo,
        NameWrap,
        CourseInfoWrap,
        InputBox,
        TimeWrap,
        TimeBox,
        TimeInput,
        AmPmSelect,
        DaysWrap,
        DayBtn,
        AddCourseBtn }
        from './StudentElements';

const Student = () => {
    const [student, setStudent] = useState('');
    function addCourse(){
        
    }

    function deleteCourse(){
        
    }

    return(
        <NumWrap>
            <StudentInfo>
                <NameWrap>
                    <InputBox defaultValue="Student name"/>
                    {/*This icon will serve as a delete button
                        need to figure out logic to implement it
                        for different things (i.e. X next to student name 
                            = delete student while X next to course =
                            delete course)
                    */}
                    <BsXCircle color="#357bb8" min-height="30px" min-width="30px"/>
                </NameWrap>
                <CourseInfoWrap>
                    <InputBox defaultValue="Course name"/>
                    <DaysWrap>
                        <DayBtn>Mon</DayBtn>
                        <DayBtn>Tue</DayBtn>
                        <DayBtn>Wed</DayBtn>
                        <DayBtn>Thu</DayBtn>
                        <DayBtn>Fri</DayBtn>
                    </DaysWrap>
                    <TimeWrap>
                        <TimeBox>
                            <TimeInput defaultValue="10:00"/>
                            <AmPmSelect>
                                <option value="am">am</option>
                                <option value="pm">pm</option>
                            </AmPmSelect>
                        </TimeBox>
                        to
                        <TimeBox>
                            <TimeInput defaultValue="10:30"/>
                            <AmPmSelect>
                                <option value="am">am</option>
                                <option value="pm">pm</option>
                            </AmPmSelect>
                        </TimeBox>
                    </TimeWrap>
                    <BsXCircle color="#357bb8" min-height="30px" min-width="30px"/>
                </CourseInfoWrap>
                <AddCourseBtn>
                    <BsPlusCircle/>
                    Add course
                </AddCourseBtn>
            </StudentInfo>
        </NumWrap>
    );
}
export default Student;