import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import useClock from './useClock';

const Footer = () => {
    const date = new Date();

    const time = useClock();
    return (
        <Navbar bg="dark" fixed='bottom'>
            <Container>
                <Nav>
                    <span className='text-center w-100 d-block fw-bold text-white'>Copyright &copy; {date.getFullYear()} FARHAN | All Rights Reserved</span>
                </Nav>
                <Nav className="m-0">
                    <h4 className="fw-bold  custom-color" > {`${time}`}</h4>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Footer;