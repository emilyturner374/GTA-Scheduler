import { BgContainer, BtnWrap, SaveBtn } from './FormElements'
import { Link } from 'react-router-dom'
import StudentList from '../../components/StudentList'
import LabList from '../../components/LabList'

const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none'
};

const studentList = {
    id: '',
    mNumber: '',
    studentName: '',
    courses: [{   
        courseId: '',
        courseName: '',
        days: [''],
        startTime: '',
        startAmPm: '',
        endTime: '',
        endAmPm: '',
    }]
};

const labList = {
    labId: '',
    labName: '',
    days: [''],
    startTime: '',
    startAmPm: '',
    endTime: '',
    endAmPm: '',
};


const GtaListForm = () => {
    function setStudentList(students){
        studentList = [...students];
        return studentList;
    }
    
    function setLabList(labs){
        labList = [...labs];
        return labList;
    }
    
    function handleSubmit(){
        const form = {studentList, labList};
        console.log("form: ");
        console.log(form);
        return form;
    }
    return(
        <BgContainer onSubmit={handleSubmit}>
            <StudentList setStudentList = {setStudentList}/>
            <LabList setLabList = {setLabList}/>
            <BtnWrap>
                <Link to="/" style={linkStyle}>
                    <SaveBtn
                        type = "submit"
                        value = "submit"
                    >
                        Save
                    </SaveBtn>
                </Link>
            </BtnWrap>
        </BgContainer>
    );
};
export default GtaListForm;