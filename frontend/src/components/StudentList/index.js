import { useState, React } from 'react';
import uniqid from 'uniqid';
import Student from '../../components/Student';
import { StudentContainer, 
        StudentHeader,
        ContentWrap,
        AddStudentBtn } 
        from "./StudentListElements";



const defaultStudentVals = {
    //Make default mNumber a random number
    //so empty entries can still be deleted
    id: uniqid(),
    mNumber: '',
    studentName: '',
    //courseList: []
};

export default function StudentList() {
    const [students, setStudents] = useState([defaultStudentVals]);
    
    function changeStudentName(val, id) {
        const newStudents = [...students];
        const index = newStudents.findIndex(student => student.id === id);
        newStudents[index].studentName = val;
        setStudents(newStudents); 
        console.log("courses before map:")
        console.log(students);
    }
    
    function changeMnumber(val, id) {
        const newStudents = [...students];
        const index = newStudents.findIndex(student => student.id === id);
        newStudents[index].mNumber = val;
        setStudents(newStudents); 
    }

    function deleteStudent(val){
        return setStudents(prev=>prev.filter(student => student.id !== val));
    }

    return (
        <StudentContainer>
            <StudentHeader>
                Student List
            </StudentHeader>
            <ContentWrap>
                {students.map((student) => {
                    const { mNumber, studentName, id } = student;
                    return(
                        <Student
                            key = {id}
                            id = {id}
                            studentName = {studentName}
                            mNumber = {mNumber}
                            changeStudentName = {changeStudentName}
                            changeMnumber = {changeMnumber}
                            deleteStudent = {deleteStudent}
                            //courseList={courseList}
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
                                //courseList: []
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