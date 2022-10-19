import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const MyNav = () => {
  return (
    <Navbar expand="lg" className="navBar">
      <Container>
        <Link className="navbar-brand" style={{ color: "white" }} to="/">West 3 Solutions</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" style={{ color: "white" }} className="nav-link">Home</Link>
            <Link to="/registration" className="nav-link" style={{color:"white"}}>Register CV</Link>
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
            <Link to="/ContactUs" className="nav-link" style={{ color: "white" }}>Contact US</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default MyNav