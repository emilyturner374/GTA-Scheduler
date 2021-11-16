import { useState } from 'react';
import uniqid from 'uniqid';
import { BsPlusCircle, BsXSquare } from 'react-icons/bs';
import Course from '../../components/Course'
import  { NumWrap,
        StudentInfo,
        NameWrap,
        InputBox,
        MnumInput,
        AddCourseBtn,
        DeleteStudentBtn }
        from './StudentElements';
       

const defaultCourseVals = {
    courseId: uniqid(),
    courseName: '',
    days: '',
    startTime: '',
    startAmPm: '',
    endTime: '',
    endAmPm: ''
};


export default function Student({ id,
                                studentName,
                                mNumber,
                                changeStudentName,
                                changeMnumber,
                                deleteStudent }) {
    const [courses, setCourses] = useState([defaultCourseVals]);

    function changeCourseName(val, id) {
        const newCourses = [...courses];
        const index = newCourses.findIndex(course => course.courseId === id);
        newCourses[index].courseName = val;
        setCourses(newCourses); 
        console.log("courses before map:")
        console.log(courses);
    }
    function changeDays(val, id) {
        const newCourses = [...courses];
        const index = newCourses.findIndex(course => course.courseId === id);
        newCourses[index].days = val;
        setCourses(newCourses); 
    }

    function changeStart(val, id) {
        const newCourses = [...courses];
        const index = newCourses.findIndex(course => course.courseId === id);
        newCourses[index].startTime = val;
        setCourses(newCourses); 
    }

    function changeStartAmPm(val, id) {
        const newCourses = [...courses];
        const index = newCourses.findIndex(course => course.courseId === id);
        newCourses[index].startAmPm = val;
        setCourses(newCourses); 
    }

    function changeEnd(val, id) {
        const newCourses = [...courses];
        const index = newCourses.findIndex(course => course.courseId === id);
        newCourses[index].endTime = val;
        setCourses(newCourses); 
    }

    function changeEndAmPm(val, id) {
        const newCourses = [...courses];
        const index = newCourses.findIndex(course => course.courseId === id);
        newCourses[index].endAmPm = val;
        setCourses(newCourses); 
    }

    function deleteCourse(val){
        return setCourses(prev=>prev.filter(course => course.courseId !== val));
    }

    function handleDeleteStudent(id){
        const defaultCourses = [defaultCourseVals];
        setCourses(defaultCourses);
        deleteStudent(id);
    }
    return(
        <NumWrap>
            <StudentInfo>
                <NameWrap>
                    <InputBox 
                        placeholder = "Student name" 
                        value = {studentName}
                        onChange = { e => changeStudentName(e.target.value, id)}
                    />
                    <MnumInput 
                        placeholder = "M-number" 
                        value = {mNumber}
                        onChange = { e => changeMnumber(e.target.value, id)}
                    />
                    {/*This icon will serve as a delete button
                        need to figure out logic to implement it
                        for different things (i.e. X next to student name 
                            = delete student while X next to course =
                            delete course)
                    */}
                    <DeleteStudentBtn
                        type = "button"
                        onClick = {() => handleDeleteStudent(id)}
                        
                    >
                        <BsXSquare color="#357bb8"/>
                    </DeleteStudentBtn>
                </NameWrap>
                {courses.map((course) => {
                    const { courseId, 
                            courseName,
                            days,
                            startTime,
                            startAmPm,
                            endTime,
                            endAmPm, } = course;
                    return(
                        <Course
                            key = {courseId}
                            courseId = {courseId}
                            courseName = {courseName}
                            days = {days}
                            startTime = {startTime}
                            startAmPm = {startAmPm}
                            endTime = {endTime}
                            endAmPm = {endAmPm}
                            changeCourseName = {changeCourseName}
                            changeDays = {changeDays}
                            changeStart = {changeStart}
                            changeStartAmPm = {changeStartAmPm}
                            changeEnd = {changeEnd}
                            changeEndAmPm = {changeEndAmPm}
                            deleteCourse = {deleteCourse}
                        />
                    );
                })}
                <AddCourseBtn 
                    type='button'
                    onClick={() => setCourses( [
                        ...courses,
                        {   courseId: uniqid(),
                            courseName: '',
                            days: '',
                            startTime: '',
                            startAmPm: '',
                            endTime: '',
                            endAmPm: '',
                        }
                    ])}
                >
                    <BsPlusCircle/>
                    Add course
                </AddCourseBtn>
            </StudentInfo>
        </NumWrap>
    );
}