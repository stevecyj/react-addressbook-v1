import React from 'react';
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import ContactForm from './ContactForm';
import './HomePage.css';
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
                                <Button variant="outline-primary" onClick={editContact.bind(this, c)}>
                                    Edit
                                </Button>
                            </td>
                            <td>
                                <Button variant="outline-primary" onClick={deleteSelectedContact.bind(this, c.id)}>
                                    Delete
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
