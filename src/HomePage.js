import React from 'react';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ContactForm from './ContactForm';
import './HomePage.css';
import styles from './custom.module.css';
import { getContacts, deleteContact } from './requests';

function HomePage() {
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [initialized, setInitialized] = useState(false);
    const [selectedId, setSelectedId] = useState(0);
    const [selectedContact, setSelectedContact] = useState({});
    const [contacts, setContacts] = useState([]);
    const openModal = () => {
        setOpenAddModal(true);
    };
    const closeModal = () => {
        setOpenAddModal(false);
        setOpenEditModal(false);
        getData();
    };
    const cancelAddModal = () => {
        setOpenAddModal(false);
    };
    const editContact = contact => {
        setSelectedContact(contact);
        setOpenEditModal(true);
    };
    const cancelEditModal = () => {
        setOpenEditModal(false);
    };
    const getData = async () => {
        const response = await getContacts();
        setContacts(response.data);
        setInitialized(true);
    };
    const deleteSelectedContact = async id => {
        await deleteContact(id);
        getData();
    };
    useEffect(() => {
        if (!initialized) {
            getData();
        }
    });
    return (
        <div className="home-page">
            <Modal show={openAddModal} onHide={closeModal} variant="dark" dialogClassName="modal_60w custom_modal">
                <Modal.Header closeButton>
                    <Modal.Title>新增聯絡人</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ContactForm
                        edit={false}
                        onSave={closeModal.bind(this)}
                        setContacts={closeModal.bind(this)}
                        onCancelAdd={cancelAddModal}
                    />
                </Modal.Body>
            </Modal>
            <Modal show={openEditModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Contact</Modal.Title>
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
                    style={{ backgroundColor: '#2c2c2c', borderColor: '#2c2c2c' }}
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
                    {contacts.map(c => (
                        <tr key={c.id}>
                            <td>{c.name}</td>
                            <td>{c.phone}</td>
                            <td>{c.email}</td>
                            <td>{c.address}</td>
                            <td>
                                <Button variant="warning" onClick={editContact.bind(this, c)}>
                                    編輯
                                </Button>
                            </td>
                            <td>
                                <Button variant="danger" onClick={deleteSelectedContact.bind(this, c.id)}>
                                    刪除
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default HomePage;
