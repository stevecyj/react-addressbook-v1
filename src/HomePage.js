import React from 'react'
import { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ContactForm from './ContactForm'
import './HomePage.css'

import { connect } from 'react-redux'
import styles from './custom.module.css'
import { getContacts, deleteContact } from './requests'

function HomePage() {
<<<<<<< HEAD
=======
    const [selectedValue, setSelectedValue] = useState('')
>>>>>>> 1a6390b... 修改 axios，下拉選單
    const [openAddModal, setOpenAddModal] = useState(false)
    const [openEditModal, setOpenEditModal] = useState(false)
    const [initialized, setInitialized] = useState(false)
    const [selectedId, setSelectedId] = useState(0)
    const [selectedContact, setSelectedContact] = useState({})
    const [contacts, setContacts] = useState([])
    const openModal = () => {
        setOpenAddModal(true)
    }
    const closeModal = () => {
        setOpenAddModal(false)
        setOpenEditModal(false)
        getData()
    }
    const cancelAddModal = () => {
        setOpenAddModal(false)
    }
    const editContact = (contact) => {
        setSelectedContact(contact)
        setOpenEditModal(true)
    }
    const cancelEditModal = () => {
        setOpenEditModal(false)
    }
    const getData = async () => {
        const response = await getContacts()
        setContacts(response.data.data)
        setInitialized(true)
    }
    const deleteSelectedContact = async (id) => {
        await deleteContact(id)
        getData()
    }

    const handleChange = (eventKey, evt) => {
        console.log(eventKey, evt)
        setSelectedValue(eventKey)
    }

    useEffect(() => {
        if (!initialized) {
            getData()
        }
    })
    return (
        <div className="home-page">
            <h1>連絡資訊</h1>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item
                        eventKey="http://laravelgcp.crud.nctu.me/api"
                        href="#/action-1"
                        value="choose1"
                        onSelect={handleChange}
                    >
                        Action-1
                    </Dropdown.Item>
                    <Dropdown.Item
                        eventKey="http://codeignitergcp.crud.nctu.me/api"
                        href="#/action-2"
                        value="choose2"
                        onSelect={handleChange}
                    >
                        Action-2
                    </Dropdown.Item>
                    <Dropdown.Item
                        eventKey="http://symfonygcp.crud.nctu.me/api"
                        href="#/action-3"
                        value="choose3"
                        onSelect={handleChange}
                    >
                        Action-3
                    </Dropdown.Item>
                </Dropdown.Menu>
                <div>
                    <b>Selected Value: </b>
                    {selectedValue}
                </div>
            </Dropdown>
            <Modal
                show={openAddModal}
                onHide={closeModal}
                variant="dark"
                dialogClassName="modal_60w custom_modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>新增聯絡人</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ContactForm
                        edit={false}
                        onSave={closeModal.bind(this)}
                        onCancelAdd={cancelAddModal}
                    />
                </Modal.Body>
            </Modal>
            <Modal
                show={openEditModal}
                onHide={closeModal}
                dialogClassName="modal_60w custom_modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title>編輯連絡人</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ContactForm
                        edit={true}
                        onSave={closeModal.bind(this)}
                        contact={selectedContact}
                        onCancelEdit={cancelEditModal}
                    />
                </Modal.Body>
            </Modal>
            <ButtonToolbar className="justify-content-end mb-2">
                <Button
                    onClick={openModal}
                    variant="primary"
                    style={{
                        backgroundColor: '#2c2c2c',
                        borderColor: '#2c2c2c',
                    }}
                >
                    新增聯絡人
                </Button>
            </ButtonToolbar>
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
                    {contacts.map((c) => (
                        <tr key={c.id}>
                            <td>{c.name}</td>
                            <td>{c.phone}</td>
                            <td>{c.email}</td>
                            <td>{c.address}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    onClick={editContact.bind(this, c)}
                                >
                                    編輯
                                </Button>
                            </td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={deleteSelectedContact.bind(
                                        this,
                                        c.id
                                    )}
                                >
                                    刪除
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts,
    }
}
export default connect(mapStateToProps, null)(HomePage)
