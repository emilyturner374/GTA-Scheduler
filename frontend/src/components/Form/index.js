import { BgContainer, BtnWrap, SaveBtn } from './FormElements'
import { Link } from 'react-router-dom'
import StudentList from '../../components/StudentList'
import LabList from '../../components/LabList'

const linkStyle = {
    color: '#ffffff',
    textDecoration: 'none'
};

const GtaListForm = () => {
    return(
        <BgContainer>
            <StudentList/>
            <LabList/>
            <BtnWrap>
                <Link to="/" style={linkStyle}>
                    <SaveBtn>
                        Save
                    </SaveBtn>
                </Link>
            </BtnWrap>
        </BgContainer>
    );
};
export default GtaListForm;