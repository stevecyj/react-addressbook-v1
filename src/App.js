import React, { useState } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import HomePage from './HomePage';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Container, Button, Row, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import styles from './custom.module.css';
const history = createHistory();
function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Row className="mb-2">
                    <Col>
                        <Navbar variant="dark" expand="lg" className={styles.customNavBar}>
                            <Navbar.Brand href="#home">通訊錄</Navbar.Brand>
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text className={styles.customNavBarText}>React</Navbar.Text>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
                <Container fluid>
                    <Row>
                        <Col md={12}>
                            <Route path="/" exact component={HomePage} />
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}
export default App;
