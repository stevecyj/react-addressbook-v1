import React, { useState } from 'react';
// import HomePage from './HomePage';
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Container, Button, Row, Col, Table } from 'react-bootstrap';
import './App.css';
import styles from './custom.module.css';
function App() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="App">
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
                <Row className="mb-2">
                    <Col>
                        <Button
                            variant="primary"
                            onClick={handleShow}
                            style={{ backgroundColor: '#2c2c2c', borderColor: '#2c2c2c', float: 'right' }}
                        >
                            新增聯絡人
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr style={{ backgroundColor: '#3498db' }}>
                                    <th width="10%">姓名</th>
                                    <th width="10%">電話</th>
                                    <th width="20%">電子信箱</th>
                                    <th width="40%">地址</th>
                                    <th width="10%">操作</th>
                                    <th width="10%">動作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>
                                        <Button variant="warning">編輯</Button>
                                    </td>
                                    <td>
                                        <Button variant="danger">刪除</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default App;
