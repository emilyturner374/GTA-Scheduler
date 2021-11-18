import { useState, React } from 'react';
import uniqid from 'uniqid';
import Student from '../../components/Student';
import { StudentContainer, 
        StudentHeader,
        ContentWrap,
        AddStudentBtn } 
        from "./StudentListElements";

const defaultCourseVals = {
    courseId: uniqid(),
    courseName: '',
    days: [''],
    startTime: '',
    startAmPm: '',
    endTime: '',
    endAmPm: ''
};

const defaultStudentVals = {
    //Make default mNumber a random number
    //so empty entries can still be deleted
    id: uniqid(),
    mNumber: '',
    studentName: '',
    courses: [defaultCourseVals]
};

export default function StudentList() {
    const [students, setStudents] = useState([defaultStudentVals]);
    
    function changeStudentName(val, id) {
        const newStudents = [...students];
        const index = newStudents.findIndex(student => student.id === id);
        newStudents[index].studentName = val;
        return setStudents(newStudents); 
    }
    
    function changeMnumber(val, id) {
        const newStudents = [...students];
        const index = newStudents.findIndex(student => student.id === id);
        newStudents[index].mNumber = val;
        return setStudents(newStudents); 
    }

    function deleteStudent(id){
        return setStudents(prev=>prev.filter(student => student.id !== id));
    }

    function changeCourseInfo(val, studentId, courseId, operation) {
        const newStudents = [...students];
        const studentIndex = newStudents.findIndex(student => student.id === studentId);
        const courseIndex = newStudents[studentIndex].courses.findIndex(course => course.courseId === courseId);
        switch(operation){
            case 'courseName':
                newStudents[studentIndex].courses[courseIndex].courseName = val;
                break;
            case 'days':
                newStudents[studentIndex].courses[courseIndex].days = val;
                break;
            case 'startTime':
                newStudents[studentIndex].courses[courseIndex].startTime = val;
                break;
            case 'startAmPm':
                newStudents[studentIndex].courses[courseIndex].startAmPm = val;
                break;
            case 'endTime':
                newStudents[studentIndex].courses[courseIndex].endTime = val;
                break;
            case 'endAmPm':
                newStudents[studentIndex].courses[courseIndex].endAmPm = val;
                break;
            default:
                break;
        }
        return setStudents(newStudents); 
    }

    function addCourse(studentId){
        const newStudents = [...students];
        const studentIndex = newStudents.findIndex(student => student.id === studentId);
        newStudents[studentIndex].courses.push({courseId: uniqid(),
                                                courseName: '',
                                                days: [''],
                                                startTime: '',
                                                startAmPm: '',
                                                endTime: '',
                                                endAmPm: ''});
        return setStudents(newStudents);                                       
    }
    function deleteCourse(studentId, courseId){
        const newStudents = [...students];
        const studentIndex = newStudents.findIndex(student => student.id === studentId);
        newStudents[studentIndex].courses = [...newStudents[studentIndex].courses.filter(course => course.courseId !== courseId)];
        return setStudents(newStudents);
    }

    return (
        <StudentContainer>
            <StudentHeader>
                Student List
            </StudentHeader>
            <ContentWrap>
                {console.log("students: ")}
                {console.log(students)}
                {students.map((student) => {
                    const { mNumber, studentName, id, courses } = student;
                    return(
                        <Student
                            key = {id}
                            id = {id}
                            studentName = {studentName}
                            mNumber = {mNumber}
                            courses = {courses}
                            changeStudentName = {changeStudentName}
                            changeMnumber = {changeMnumber}
                            deleteStudent = {deleteStudent}
                            changeCourseInfo = {changeCourseInfo}
                            deleteCourse = {deleteCourse}
                            addCourse = {addCourse}
                        />
                    );
                })}
                <AddStudentBtn 
                    type='button'
                    onClick={() => setStudents( [
                            ...students,
                            {
                                //Default values
                                id: uniqid(),
                                mNumber: '',
                                studentName: '',
                                courses: [{   
                                    courseId: uniqid(),
                                    courseName: '',
                                    days: [''],
                                    startTime: '',
                                    startAmPm: '',
                                    endTime: '',
                                    endAmPm: '',
                                }]
                            }
                        ]
                    )}
                >
                    Add student
                </AddStudentBtn>
            </ContentWrap>
        </StudentContainer>
    );
};