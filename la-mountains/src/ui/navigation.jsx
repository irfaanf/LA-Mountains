import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MountainIcon from '../assets/mountain-icon.png';

const Navigation = () => {
    return (
        <Navbar expand="lg" className="bg-none">
            <Container>
                <Navbar.Brand>
                    <div
                        style={{
                            width: "30px",
                            height: "30px", 
                        }}
                        >
                        <img
                            src={MountainIcon}
                            alt="Avatar"
                            className="d-inline-block align-top"
                            style={{ 
                                verticalAlign: 'middle',
                                borderRadius: '50px', 
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                backgroundColor: 'white' 
                            }}
                        />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;