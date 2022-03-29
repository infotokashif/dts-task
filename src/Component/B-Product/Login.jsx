import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';

export const Login  = () => {
    return (
        <>
            <Container>
            
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Link to="/" onClick={()=>alert("Login Succesfull")} variant="success btn-block" type="submit">
                                Login
                            </Link>
                        </Form>
                    </Col>
                </Row>
                
            </Container>
        </>
    );
};

