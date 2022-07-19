import { Navbar, Container, Nav } from 'react-bootstrap';
import {  NavLink } from "react-router-dom";
const Navbarr = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Social App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as= {NavLink} to="/">Home</Nav.Link>
                            <Nav.Link as= {NavLink} to="/about">About us</Nav.Link>
                            <Nav.Link as= {NavLink} to="/contact">Contact us</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as= {NavLink} to="/login">Login</Nav.Link>
                            <Nav.Link as= {NavLink} to="/signup">Signup</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}
export default Navbarr;