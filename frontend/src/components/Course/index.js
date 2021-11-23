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
            { studentId,
            days,
            courseId, 
            courseName,
            startTime,
            endTime,
            changeCourseInfo,
            deleteCourse}
        ){   

        return(
            <CourseInfoWrap>
                <InputBox 
                    placeholder="Course name"
                    value={courseName}
                    onChange = { e => changeCourseInfo(e.target.value, studentId, courseId, "courseName")}
                />
                <DaysWrap>
                    <DayBtn 
                        selected = {days.findIndex(day => day === "Monday") === -1}
                        value="Monday" 
                        type="button"
                        onClick = { e => changeCourseInfo(e.target.value, studentId, courseId, "days")}
                    >
                            Mon
                    </DayBtn>
                    <DayBtn 
                        selected = {days.findIndex(day => day === "Tuesday") === -1}
                        value="Tuesday" 
                        type="button"
                        onClick = { e => changeCourseInfo(e.target.value, studentId, courseId, "days")}
                    >
                        Tue
                    </DayBtn>
                    <DayBtn 
                        selected = {days.findIndex(day => day === "Wednesday") === -1}
                        value="Wednesday" 
                        type="button"
                        onClick = { e => changeCourseInfo(e.target.value, studentId, courseId, "days")}
                    >
                        Wed
                    </DayBtn>
                    <DayBtn 
                        selected = {days.findIndex(day => day === "Thursday") === -1}
                        value="Thursday" 
                        type="button"
                        onClick = { e => changeCourseInfo(e.target.value, studentId, courseId, "days")}
                    >
                        Thu
                    </DayBtn>
                    <DayBtn 
                        selected = {days.findIndex(day => day === "Friday") === -1}
                        value="Friday" 
                        type="button"
                        onClick = { e => changeCourseInfo(e.target.value, studentId, courseId, "days")}
                    >
                        Fri
                    </DayBtn>
                </DaysWrap>
                <TimeWrap>
                    <TimeBox>
                        <TimeInput 
                            placeholder="10:00"
                            value={startTime}
                            onChange = { e => changeCourseInfo(e.target.value, studentId, courseId, "startTime")}
                        />
                        <AmPmSelect
                            onChange = { e => changeCourseInfo(e.target.value, studentId, courseId, "startAmPm")}
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
                            onChange = { e => changeCourseInfo(e.target.value, studentId, courseId, "endTime")}
                        />
                        <AmPmSelect
                            onChange = { e => changeCourseInfo(e.target.value, studentId, courseId, "endAmPm")}
                        >
                            <option value="am">am</option>
                            <option value="pm">pm</option>
                        </AmPmSelect>
                    </TimeBox>
                </TimeWrap>
                <DeleteCourseBtn
                    type = "button"
                    onClick = {() => deleteCourse(studentId, courseId)}
                >
                    <BsXCircle color="#357bb8" min-height="30px" min-width="30px"/>
                </DeleteCourseBtn>
            </CourseInfoWrap>
        );
}