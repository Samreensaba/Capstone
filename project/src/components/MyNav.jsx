import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNav = () => {
  return (
    <Navbar bg="light" expand="lg" className="navBar">
      <Container>
        <Link className="navbar-brand" style={{ color: "white" }} to="/">West 3 Solutions</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" style={{ color: "white" }}><Nav.Link style={{color:"white"}}>Home</Nav.Link></Link>
            <Link to="/registration"><Nav.Link style={{color:"white"}}>Register CV</Nav.Link></Link>
            {/* <NavDropdown style={{textDecoration:"none", color:"white"}} title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            <Link to="/ContactUs"><Nav.Link style={{ color: "white" }}>Contact US</Nav.Link></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default MyNav