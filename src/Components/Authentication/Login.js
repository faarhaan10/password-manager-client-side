import React, { useEffect } from 'react';
import auth from './../../Firebase/firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import Loading from '../Shared/Loading';
import { Container, Card, Button } from 'react-bootstrap';


const Login = () => {
    const [signInWithGoogle, user, loading, gerror] = useSignInWithGoogle(auth);



    useEffect(() => {
        if (gerror) {
            toast.error('Login Failed!');
        }
    }, [gerror]);

    if (loading) return <Loading />;

    return (
        <Container >
            <div style={{
                height: '89vh',
                width: '100%'
            }}
                className='d-grid justify-content-center align-items-center'
            >
                <Card>
                    <Button variant='dark' className='login-btn' onClick={() => signInWithGoogle()}>
                        <h3 className='fw-bold'>{'<'}<span className=' custom-color p-2'>Password</span>{'/>'}</h3>
                    </Button>
                </Card>
            </div>
        </Container>
    );
};

export default Login;