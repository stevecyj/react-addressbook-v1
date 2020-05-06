// const APIURL = 'http://localhost:3005';
// const axios = require('axios');
// export const getContacts = () => axios.get(`${APIURL}/contacts`);
// export const addContact = (data) => axios.post(`${APIURL}/contacts`, data);
// export const editContact = (data) => axios.put(`${APIURL}/contacts/${data.id}`, data);
// export const deleteContact = (id) => axios.delete(`${APIURL}/contacts/${id}`);
// const config = {
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//     },
// }
const APIURL = 'http://laravelgcp.crud.nctu.me/api'
const axios = require('axios')
export const getContacts = () => axios.get(`${APIURL}`)
export const addContact = (data) => axios.post(`${APIURL}/new`, data)
export const editContact = (data) =>
    axios.put(`${APIURL}/edit/${data.id}`, data)
export const deleteContact = (id) => axios.delete(`${APIURL}/delete/${id}`)

export const req = axios.interceptors.request.use((request) => {
    console.log('React Starting Request', request)
    return request
})
