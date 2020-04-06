// const APIURL = 'http://localhost:3005';
// const axios = require('axios');
// export const getContacts = () => axios.get(`${APIURL}/contacts`);
// export const addContact = (data) => axios.post(`${APIURL}/contacts`, data);
// export const editContact = (data) => axios.put(`${APIURL}/contacts/${data.id}`, data);
// export const deleteContact = (id) => axios.delete(`${APIURL}/contacts/${id}`);

const APIURL = 'http://symfonygcp.crud.nctu.me/api';
const axios = require('axios');
export const getContacts = () => axios.get(`${APIURL}`);
export const addContact = (data) => axios.post(`${APIURL}/new`, data);
export const editContact = (data) => axios.put(`${APIURL}/edit/${data.id}`, data);
export const deleteContact = (id) => axios.delete(`${APIURL}/delete/${id}`);
