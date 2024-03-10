import Nav from 'react-bootstrap/Nav';

const CustomNavLink = ({ children }) => {
    return (
        <Nav.Link className='text-white'
            style={{
                textDecoration: 'underline',
                fontStyle: 'italic',
                fontWeight: 'bold',
                textTransform: 'uppercase'
            }}>{children}</Nav.Link>
    );
}

export default CustomNavLink;