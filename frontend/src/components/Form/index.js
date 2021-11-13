import { BgContainer, BtnWrap, SaveBtn } from './FormElements'
import StudentList from '../../components/StudentList'
import LabList from '../../components/LabList'

const GtaListForm = () => {
    return(
        <BgContainer>
            <StudentList/>
            <LabList/>
            <BtnWrap>
                <SaveBtn>
                    Save
                </SaveBtn>
            </BtnWrap>
        </BgContainer>
    );
};
export default GtaListForm;