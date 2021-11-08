import { BsSearch, BsCalendar2Plus, BsPencilSquare } from 'react-icons/bs'
import { Container, ToolWrap, SearchWrap, SearchBox } from './ToolbarElements';

const Toolbar = () => {
    return(
        <Container>
            <SearchWrap>
                <BsSearch size="12px" color="#000000"/>
                <SearchBox defaultValue="Search"/>
            </SearchWrap>
            <ToolWrap>
                {/* Put react icons here */}
                <BsPencilSquare size="25px"/>
                <BsCalendar2Plus size="25px"/>
            </ToolWrap>
        </Container>  
    );
};
export default Toolbar;