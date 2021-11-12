import { BgContainer } from './FormElements'
import StudentList from '../../components/StudentList'
import LabList from '../../components/LabList'

const GtaListForm = () => {
    return(
        <BgContainer>
            <StudentList/>
            <LabList/>
        </BgContainer>
    );
};
export default GtaListForm;