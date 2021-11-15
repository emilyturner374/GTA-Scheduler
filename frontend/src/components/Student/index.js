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
    endTime: ''
}

const defaultCourseList = {
    courseList: [defaultCourseVals],
};

export default function Student({ id,
                                mNumber, 
                                studentName, 
                                changeStudentName,
                                changeMnumber,
                                deleteStudent }) {
    const [courses, setCourses] = useState(defaultCourseList);
    const { courseList } = courses;

    function changeCourseName(val) {
        setCourses((prev) => ({
                ...prev,
                courseName : val
             }))
        console.log(courses);
    }
    function changeDays(val) {
        setCourses((prev) => ({
                ...prev,
                days : val
             }))
        console.log(courses);
    }

    function changeStart(val) {
        setCourses((prev) => ({
                ...prev,
                startTime : val
             }))
        console.log(courses);
    }
    
    function changeEnd(val) {
        setCourses((prev) => ({
                ...prev,
                endTime : val
             }))
        console.log(courses);
    }
    
    function deleteLab(val){
        const index = courseList.findIndex(({ id }) => id === val);
        if (index !== -1) {
            setCourses([
                ...courseList.slice(0, index),
                ...courseList.slice(index + 1)
            ]);
        }
    }
    


    return(
        <NumWrap>
            <StudentInfo>
                <NameWrap>
                    <InputBox 
                        placeholder="Student name" 
                        defaultValue={studentName}
                        onChange={ e => changeStudentName(e.target.value)}
                    />
                    <MnumInput 
                        placeholder="M-number" 
                        defaultValue={mNumber}
                        onChange={ e => changeMnumber(e.target.value)}
                    />
                    {/*This icon will serve as a delete button
                        need to figure out logic to implement it
                        for different things (i.e. X next to student name 
                            = delete student while X next to course =
                            delete course)
                    */}
                    <DeleteStudentBtn
                        type = "button"
                        onClick = {deleteStudent({id})}
                    >
                        <BsXSquare color="#357bb8"/>
                    </DeleteStudentBtn>
                </NameWrap>
                {courseList.map((course) => {
                    const { courseId, courseName, days, startTime, endTime} = course;
                    return(
                        <Course
                            courseId = {courseId}
                            courseName = {courseName}
                            days = {days}
                            startTime = {startTime}
                            endTime = {endTime}
                            changeCourseName = {changeCourseName}
                            changeDays = {changeDays}
                            changeStart = {changeStart}
                            changeEnd = {changeEnd}
                            deleteLab = {deleteLab}
                        />
                    );
                })}
                <AddCourseBtn 
                    type='button'
                    onClick={() => setCourses( (prev) => ({
                        ...prev,
                        courseList: [ 
                            ...prev.courseList,
                            {   courseId: uniqid(),
                                courseName: '',
                                days: '',
                                startTime: '',
                                endTime: ''
                            }
                        ]
                    }))}
                >
                    <BsPlusCircle/>
                    Add course
                </AddCourseBtn>
            </StudentInfo>
        </NumWrap>
    );
}