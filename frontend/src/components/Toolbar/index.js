import { BsSearch, BsPencilSquare } from 'react-icons/bs'
import { Container, EditBtn, SearchWrap, SearchBox } from './ToolbarElements';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: '#242424',
    textDecoration: 'none'
};

const Toolbar = () => {
    return(
        <Container>
            <SearchWrap>
                <BsSearch size="12px" color="#000000"/>
                <SearchBox defaultValue="Search"/>
            </SearchWrap>
            
            <EditBtn>
                {/* Put react icons here */}
                <BsPencilSquare size="20px"/>
                <Link to="/form" style={linkStyle}>
                Edit Lists
                </Link>
            </EditBtn>
            
        </Container>  
    );
};
export default Toolbar;