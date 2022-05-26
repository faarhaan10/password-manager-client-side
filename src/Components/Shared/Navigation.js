import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        alt="logo"
                        className="d-inline-block align-top App-logo"
                    />{' '}
                    React Bootstrap
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/'>Home</Nav.Link>

                </Nav>
            </Container>
        </Navbar>
    );
};

export default Navigation;