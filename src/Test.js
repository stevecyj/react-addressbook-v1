import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Container, Button, Row, Col } from 'react-bootstrap';
import './App.css';
import styles from './custom.module.css';

class Test extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row className="mb-3">
                        <Col sm={8}>sm=8</Col>
                        <Col sm={4}>sm=4</Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col sm>sm=true</Col>
                        <Col sm>sm=true</Col>
                        <Col sm>sm=true</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Test;
