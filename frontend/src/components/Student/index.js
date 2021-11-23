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
                {courses.map((course) => {
                    const { courseId, 
                            courseName,
                            days,
                            startTime,
                            endTime, } = course;
                    return(
                        <Course
                            key = {courseId}
                            studentId = {id}
                            courseId = {courseId}
                            courseName = {courseName}
                            days = {days}
                            startTime = {startTime}
                            endTime = {endTime}
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