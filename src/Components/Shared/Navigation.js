import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { signOut } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import auth from './../../Firebase/firebase.init';
import { toast } from 'react-hot-toast';


const Navigation = () => {
    const [user] = useAuthState(auth);


    const handleSignOut = () => {
        signOut(auth)
            .then(() => toast.error('Signed out'))
    }
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'>
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        alt="logo"
                        className="d-inline-block align-top App-logo"
                    />{' '}
                    <span className='fw-bolder custom-color'>{'<PASSWORD />'}</span>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to='/passwords' className='fw-bold ' style={{ color: 'white' }}>Passwords</Nav.Link>
                    <Nav.Link as={Link} to='/about' className='fw-bold ' style={{ color: 'white' }}>About me</Nav.Link>



                </Nav>
                <Nav>
                    {user?.email ? <Nav.Link onClick={handleSignOut} className='fw-bold ' style={{ color: 'white' }}>Logout</Nav.Link>
                        :
                        <Nav.Link as={Link} to='/login' className='fw-bold ' style={{ color: 'white' }}>Login</Nav.Link>
                    }
                </Nav>

            </Container>
        </Navbar >
    );
};

export default Navigation;