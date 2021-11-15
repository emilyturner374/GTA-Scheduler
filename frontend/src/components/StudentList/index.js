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

const defaultStudentList = {
    studentList: [defaultStudentVals],
};

export default function StudentList() {
    const [students, setStudents] = useState(defaultStudentList);
    const { studentList } = students;
    
    function changeStudentName(val) {
        setStudents((prev) => ({
                ...prev,
                studentName : val
             }))
        console.log(students);
    }
    
    function changeMnumber(val) {
        setStudents((prev) => ({
                ...prev,
                mNumber : val
             }))
        console.log(students);
    }

    function deleteStudent(val){
        //setStudents(studentList.filter(student => student.id !== val));
        
        const index = studentList.findIndex(({ id }) => id === val);
        if (index !== -1) {
            setStudents([
                ...studentList.slice(0, index),
                ...studentList.slice(index + 1)
            ]);
        }
        
    }

    return (
        <StudentContainer>
            <StudentHeader>
                Student List
            </StudentHeader>
            <ContentWrap>
                {studentList.map((student) => {
                    const { mNumber, studentName, id } = student;
                    return(
                        <Student
                            studentName={studentName}
                            mNumber={mNumber}
                            changeStudentName = {changeStudentName}
                            changeMnumber = {changeMnumber}
                            deleteStudent = {deleteStudent}
                            id = {id}
                            //courseList={courseList}
                        />
                    );
                })}
                <AddStudentBtn 
                    type='button'
                    onClick={() => setStudents( (prev) => ({
                        ...prev,
                        studentList: [ 
                            ...prev.studentList,
                            {
                                //Default values
                                id: uniqid(),
                                mNumber: '',
                                studentName: '',
                                //courseList: []
                            }
                        ]
                        
                    }))}
                >
                    Add student
                </AddStudentBtn>
            </ContentWrap>
        </StudentContainer>
    );
};