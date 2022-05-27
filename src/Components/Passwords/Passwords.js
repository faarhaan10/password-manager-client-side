import React from 'react';
import toast from 'react-hot-toast';
import { Button, ButtonGroup, Card, Container } from 'react-bootstrap';
import { MdOutlineContentCopy } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";

const Passwords = () => {
    const date = new Date();
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => toast.success('Copied to clipboard'))

    }
    const handleUpdate = () => {
        toast.success('updated');
    }
    const handleDelete = () => {
        toast.error('Deleted!');
    }
    return (
        <div>
            <Container>
                <Card className='ps-3 pe-3'>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Site</th>
                                <th scope="col">{''}</th>
                                <th scope="col">Last updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>google.com</td>
                                <td><ButtonGroup aria-label="Basic example">
                                    <Button variant="light"
                                        onClick={(() => handleCopy('farhan10    '))}
                                    >
                                        <MdOutlineContentCopy />
                                    </Button>
                                    <Button variant="light"
                                        onClick={handleUpdate}
                                    >
                                        <GrUpdate />
                                    </Button>
                                    <Button variant="light"
                                        onClick={handleDelete}
                                    >
                                        <AiOutlineDelete />
                                    </Button>
                                </ButtonGroup></td>

                                <td>{date.toDateString()}</td>
                            </tr>
                        </tbody>
                    </table>
                </Card>
            </Container>

        </div>
    );
};

export default Passwords;