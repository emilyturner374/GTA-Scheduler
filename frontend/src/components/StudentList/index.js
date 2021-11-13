
import Student from '../../components/Student';
import { StudentContainer, 
        StudentHeader,
        ContentWrap,
        AddStudentBtn } 
        from "./StudentListElements";
        
const StudentList = () => {
    function addStudent(){

    }
    function deleteStudent(){

    }

    return(
        <StudentContainer>
            <StudentHeader>
                Student List
            </StudentHeader>
            <ContentWrap>
                <Student/>
                <AddStudentBtn>
                    Add student
                </AddStudentBtn>
            </ContentWrap>
        </StudentContainer>
    );
};
export default StudentList;