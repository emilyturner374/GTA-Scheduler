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
                                courses,
                                changeStudentName,
                                changeMnumber,
                                deleteStudent,
                                changeCourseInfo,
                                deleteCourse,
                                addCourse }) {
    {/*const [courses, setCourses] = useState([defaultCourseVals]);

    function changeCourseInfo(val, id, operation) {
        const newCourses = [...courses];
        const index = newCourses.findIndex(course => course.courseId === id);
        switch(operation){
            case 'courseName':
                newCourses[index].courseName = val;
                break;
            case 'days':
                newCourses[index].days = val;
                break;
            case 'startTime':
                newCourses[index].startTime = val;
                break;
            case 'startAmPm':
                newCourses[index].startAmPm = val;
                break;
            case 'endTime':
                newCourses[index].endTime = val;
                break;
            case 'endAmPm':
                newCourses[index].endAmPm = val;
                break;
            default:
                break;
        }
        setCourses(newCourses); 
    }

    function deleteCourse(val){
        return setCourses(prev=>prev.filter(course => course.courseId !== val));
    }

    function handleDeleteStudent(id){
        deleteStudent(id);
        const defaultCourses = [defaultCourseVals];
        setCourses(defaultCourses);
    }
    */}

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
                        onClick = {() => deleteStudent(id)}
                        
                    >
                        <BsXSquare color="#357bb8"/>
                    </DeleteStudentBtn>
                </NameWrap>
                {console.log("courses: ")}
                {console.log(courses)}
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
                            studentId = {id}
                            courseId = {courseId}
                            courseName = {courseName}
                            days = {days}
                            startTime = {startTime}
                            startAmPm = {startAmPm}
                            endTime = {endTime}
                            endAmPm = {endAmPm}
                            changeCourseInfo = {changeCourseInfo}
                            deleteCourse = {deleteCourse}
                        />
                    );
                })}
                <AddCourseBtn 
                    type='button'
                    onClick = {() => addCourse(id)}
                >
                    <BsPlusCircle/>
                    Add course
                </AddCourseBtn>
            </StudentInfo>
        </NumWrap>
    );
}

{/*onClick={() => setCourses( [
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
*/}