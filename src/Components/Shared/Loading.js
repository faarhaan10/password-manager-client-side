import React from 'react';
import logo from '../../logo.svg';
import { Container } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <Container >
                <div style={{
                    height: '89vh',
                    width: '100%'
                }}
                    className='d-grid justify-content-center align-items-center'
                >
                    <img src={logo} className="App-logo" alt="logo" style={{ height: '30vmin' }} />
                </div>
            </Container>
        </div>
    );
};

export default Loading;