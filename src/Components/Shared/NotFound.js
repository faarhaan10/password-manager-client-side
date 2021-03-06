import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div className='custom-bg'>
            <Container >
                <div style={{
                    height: '90vh',
                    width: '100%'
                }}
                    className='d-grid justify-content-center align-items-center'
                >
                    <h2 className='fw-bold' style={{ color: 'red' }}>Not Found</h2>
                </div>
            </Container>
        </div>
    );
};

export default NotFound;