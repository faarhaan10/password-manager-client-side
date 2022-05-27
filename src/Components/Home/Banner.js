import React from 'react';
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='custom-bg'>
            <Container >
                <div style={{
                    height: '83vh',
                    width: '100%'
                }}
                    className='d-grid justify-content-center align-items-center'
                >
                    <h2 className='fw-bold' style={{ color: 'red' }}>Wellcome to password mania</h2>
                </div>
            </Container>
        </div>
    );
};

export default Banner;