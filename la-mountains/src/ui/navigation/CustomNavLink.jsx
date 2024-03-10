import Nav from 'react-bootstrap/Nav';

const CustomNavLink = ({ children }) => {
    return (
        <Nav.Link className='text-white'>{children}</Nav.Link>
    );
}

export default CustomNavLink;